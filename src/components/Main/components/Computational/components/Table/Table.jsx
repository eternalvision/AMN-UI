import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";

export const Table = ({
    LanguageSets,
    selectedLang,
    Hotels,
    UnitName,
    Loader,
    patchWorkerData,
    getWorkerData,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [databaseRecords, setDatabaseRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWorkerData();
                setDatabaseRecords(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [getWorkerData]);

    const calculateFields = useCallback(
        ({ hours, rate, total_deductions, compensation, gross_wages }) => {
            // Явное преобразование значений к числу
            hours = +hours;
            rate = +rate;
            total_deductions = +total_deductions;
            compensation = +compensation;
            gross_wages = +gross_wages;

            let amount = +(hours * rate).toFixed(2);
            let total_internal_costs = +(
                amount +
                total_deductions -
                compensation
            ).toFixed(2);

            let internal_costs_according_to_the_formula = 0;
            if (gross_wages !== 0) {
                // Изменено с проверки на пустую строку и null на проверку на 0
                if (gross_wages < 17300) {
                    internal_costs_according_to_the_formula = +(
                        gross_wages * 0.313 +
                        17300 * 0.135
                    ).toFixed(2);
                } else if (gross_wages < 42300) {
                    internal_costs_according_to_the_formula = +(
                        gross_wages * 0.313 +
                        17300 * 0.135 +
                        gross_wages * 0.15 -
                        2570
                    ).toFixed(2);
                } else {
                    internal_costs_according_to_the_formula = +(
                        gross_wages * 0.448 +
                        gross_wages * 0.15 -
                        2570
                    ).toFixed(2);
                }
            }

            let difference_fact_formula = +(
                total_internal_costs - internal_costs_according_to_the_formula
            ).toFixed(2);

            return {
                amount,
                total_internal_costs,
                internal_costs_according_to_the_formula,
                difference_fact_formula,
            };
        },
        []
    );

    const cellEdited = useCallback(
        async (cell) => {
            const field = cell.getField();
            const value = cell.getValue();
            const rowData = cell.getRow().getData();
            const { recordId } = rowData;
            const changedData = {
                [field]: value,
            };

            const updatedFields = calculateFields(rowData);
            cell.getRow().update(updatedFields);

            try {
                await patchWorkerData(recordId, changedData);
            } catch (error) {
                console.error("Error patching data:", error);
            }
        },
        [calculateFields, patchWorkerData]
    );

    const transformHotelsData = useCallback(
        ({ Hotels, UnitName }) => {
            return Hotels.flatMap((hotel) =>
                hotel.positions.flatMap((position) =>
                    position.employees.map((employee) => {
                        const dbRecord =
                            databaseRecords.find(
                                (record) =>
                                    record.workerId === employee.recordId
                            ) || {};

                        const {
                            gross_wages = dbRecord.gross_wages || "",
                            total_deductions = dbRecord.total_deductions || "",
                            compensation = dbRecord.compensation || "",
                            ...otherFields
                        } = employee;

                        const { hours, rate, recordId } = employee;

                        const calculatedFields = calculateFields({
                            gross_wages,
                            total_deductions,
                            compensation,
                            hours,
                            rate,
                        });

                        return {
                            id: recordId,
                            unitName: UnitName,
                            ...otherFields,
                            ...calculatedFields,
                            hotelName: hotel.hotelName,
                            position: position.positionName,
                            gross_wages,
                            total_deductions,
                            compensation,
                        };
                    })
                )
            );
        },
        [calculateFields, databaseRecords]
    );

    const tableRef = useRef(null);
    const tableInstance = useRef(null);

    const columnsWithWrap = useMemo(() => {
        const formatNumber = (number) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        };

        return LanguageSets.TableInterfaceElements()[selectedLang].map(
            (column) => {
                if (
                    column.field === "hours" ||
                    column.field === "rate" ||
                    column.field === "amount" ||
                    column.field === "total_internal_costs" ||
                    column.field ===
                        "internal_costs_according_to_the_formula" ||
                    column.field === "difference_fact_formula"
                ) {
                    return {
                        ...column,
                        cssClass: "word-wrap",
                        cellEdited: cellEdited,
                        formatter: (cell) => formatNumber(cell.getValue()),
                    };
                }

                return {
                    ...column,
                    cssClass: "word-wrap",
                    cellEdited: cellEdited,
                };
            }
        );
    }, [LanguageSets, selectedLang, cellEdited]);

    const transformedData = transformHotelsData({
        Hotels,
        UnitName,
    });

    useEffect(() => {
        const currentTableRef = tableRef.current;

        const TableInterfaceElementsGroup =
            LanguageSets.TableInterfaceElementsGroup()[selectedLang][0];

        const { workersTitle, totalAmountText } = TableInterfaceElementsGroup;

        const formatNumber = (number) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        };

        if (currentTableRef) {
            tableInstance.current = new Tabulator(currentTableRef, {
                columns: columnsWithWrap,
                data: transformedData,
                groupBy: ["hotelName", "position"],
                groupStartOpen: [true, false],
                groupHeader: (value, count, data) => {
                    let totalAmount = 0;

                    data.forEach((item) => {
                        totalAmount += item.amount;
                    });

                    const formattedTotalAmount = formatNumber(totalAmount);

                    return `<b class="HotelTitle">${value}</b> <span class="HotelWorkers" style='margin-left:50px;'>( <b style='color:#333'>${count}</b> ${workersTitle} )</span>
                    <span class="HotelTotalAmount" style='margin-left:50px;'>${totalAmountText}: <b style='color:#333'>${formattedTotalAmount}</b></span>`;
                },
            });
        }

        setIsLoaded(true);

        return () => {
            if (currentTableRef) {
                currentTableRef.innerHTML = "";
            }
        };
    }, [columnsWithWrap, transformedData, LanguageSets, selectedLang]);

    return (
        <>
            {!isLoaded && <Loader />} <section ref={tableRef}></section>
        </>
    );
};
