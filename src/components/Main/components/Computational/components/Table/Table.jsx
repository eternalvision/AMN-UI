import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";

export const Table = ({
    LanguageSets,
    selectedLang,
    Hotels,
    UnitName,
    Loader,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const calculateFields = useCallback(
        ({ hours, rate, total_deductions, compensation, gross_wages }) => {
            let amount = hours * rate;
            let total_internal_costs = amount + total_deductions - compensation;

            let internal_costs_according_to_the_formula = 0;
            if (gross_wages !== "" && gross_wages != null) {
                if (gross_wages < 17300) {
                    internal_costs_according_to_the_formula =
                        gross_wages * 0.313 + 17300 * 0.135;
                } else if (gross_wages < 42300) {
                    internal_costs_according_to_the_formula =
                        gross_wages * 0.313 +
                        17300 * 0.135 +
                        gross_wages * 0.15 -
                        2570;
                } else {
                    internal_costs_according_to_the_formula =
                        gross_wages * 0.448 + gross_wages * 0.15 - 2570;
                }
            }

            let difference_fact_formula =
                total_internal_costs - internal_costs_according_to_the_formula;

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
        (cell) => {
            const field = cell.getField();
            const value = cell.getValue();
            const rowData = cell.getRow().getData();
            const { recordId } = rowData;
            const changedData = {
                [field]: value,
                workerId: recordId,
            };
            console.log(changedData);

            const updatedFields = calculateFields(rowData);
            cell.getRow().update(updatedFields);
        },
        [calculateFields]
    );

    const transformHotelsData = useCallback(
        ({ Hotels, UnitName }) => {
            return Hotels.flatMap((hotel) =>
                hotel.positions.flatMap((position) =>
                    position.employees.map((employee) => {
                        const {
                            gross_wages = "",
                            total_deductions = "",
                            compensation = "",
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
        [calculateFields]
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
