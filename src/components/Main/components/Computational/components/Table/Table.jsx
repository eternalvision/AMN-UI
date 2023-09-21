import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { nanoid } from "nanoid";

const cellEdited = (cell) => {
    const rowData = cell.getRow().getData();
    const { hours, rate, total_deductions, compensation, gross_wages, id } =
        rowData;

    let amount = hours * rate;
    let total_internal_costs = amount + total_deductions - compensation;

    let internal_costs_according_to_the_formula = 0;
    if (gross_wages !== "" && gross_wages != null) {
        if (gross_wages < 17300) {
            internal_costs_according_to_the_formula =
                gross_wages * 0.313 + 17300 * 0.135;
        } else if (gross_wages < 42300) {
            internal_costs_according_to_the_formula =
                gross_wages * 0.313 + 17300 * 0.135 + gross_wages * 0.15 - 2570;
        } else {
            internal_costs_according_to_the_formula =
                gross_wages * 0.448 + gross_wages * 0.15 - 2570;
        }
    }

    let difference_fact_formula =
        total_internal_costs - internal_costs_according_to_the_formula;

    console.log({
        [cell.getField()]: cell.getValue(),
        id: id,
    });

    cell.getRow().update({
        amount: amount,
        total_internal_costs: total_internal_costs,
        internal_costs_according_to_the_formula:
            internal_costs_according_to_the_formula,
        difference_fact_formula: difference_fact_formula,
    });
};

const transformHotelsData = ({ Hotels, UnitName }) => {
    return Hotels.flatMap((hotel) =>
        hotel.positions.flatMap((position) =>
            position.employees.map((employee) => {
                return {
                    unitName: UnitName,
                    ...employee,
                    id: nanoid(6),
                    hotelName: hotel.hotelName,
                    position: position.positionName,
                    gross_wages: employee.gross_wages || "",
                    total_deductions: employee.total_deductions || "",
                    compensation: employee.compensation || "",
                    total_internal_costs: "",
                    internal_costs_according_to_the_formula: "",
                    internal_costs_per_hour: "",
                    difference_fact_formula: "",
                };
            })
        )
    );
};

export const Table = ({ LanguageSets, selectedLang, Hotels, UnitName }) => {
    const tableRef = useRef(null);
    const tableInstance = useRef(null);

    const columnsWithWrap = LanguageSets.TableInterfaceElements()[
        selectedLang
    ].map((column) => ({
        ...column,
        cssClass: "word-wrap",
        cellEdited: cellEdited,
    }));

    const transformedData = transformHotelsData({
        Hotels,
        UnitName,
    });

    useEffect(() => {
        const currentTableRef = tableRef.current;

        if (currentTableRef) {
            tableInstance.current = new Tabulator(currentTableRef, {
                columns: columnsWithWrap,
                data: transformedData,
            });
        }

        return () => {
            if (currentTableRef) {
                currentTableRef.innerHTML = "";
            }
        };
    }, [columnsWithWrap, transformedData]);

    return <section ref={tableRef}></section>;
};
