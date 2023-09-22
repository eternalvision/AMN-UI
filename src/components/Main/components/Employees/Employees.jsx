import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shortUUID from "short-uuid";
import { EmployeeComponents } from "./components/EmployeeComponents";
const { EmployeeInterfaceBtn, EmployeeCards } = EmployeeComponents;

export const Employees = ({
    GetLogo,
    LanguageSets,
    selectedLang,
    username,
    useFetchData,
    FilteredData,
    useCurrentDate,
    NumberFormatter,
    Loader,
}) => {
    const Values = LanguageSets.CardInterfaceElements()[selectedLang];
    const navigate = useNavigate();
    const { currentYear, setCurrentYear, month, setMonth } = useCurrentDate();
    const { items } = useFetchData({
        currentYear,
        month,
        asmisToken: "oVTsPsUzqn6bpfr3ZDGDok6LUnfXTqjk",
    });

    const { text, calculationText } = Values[0];
    const data = items ? FilteredData({ items }) : null;
    const termin = data?.Termin;

    const dateY = termin ? termin.slice(0, 4) : null;
    const dateM = termin ? termin.slice(4, 6) : null;

    return (
        <section>
            {data ? (
                termin && (
                    <>
                        <EmployeeInterfaceBtn
                            month={month}
                            setMonth={setMonth}
                            currentYear={currentYear}
                            setCurrentYear={setCurrentYear}
                            dateY={dateY}
                            dateM={dateM}
                            LanguageSets={LanguageSets}
                            selectedLang={selectedLang}
                            GetLogo={GetLogo}
                        />
                        <div className="Employee-data">
                            {data.Employees.map(
                                ({ hotels, unitName, amount }) => (
                                    <ul
                                        key={shortUUID.generate()}
                                        className="Employee-list">
                                        <li
                                            className="Employee-category"
                                            onClick={() =>
                                                navigate(
                                                    `/${username}/computational/${dateY}${dateM}/${unitName}`,
                                                    {
                                                        state: {
                                                            hotels,
                                                            unitName,
                                                        },
                                                    }
                                                )
                                            }>
                                            <span>{calculationText} -</span>
                                            <span>{unitName}</span>
                                        </li>
                                        <li className="Employee-category__amount">
                                            <span>{text}:</span>{" "}
                                            <b>
                                                <NumberFormatter
                                                    number={amount}
                                                />
                                            </b>
                                        </li>
                                        <li>
                                            <EmployeeCards
                                                hotels={hotels}
                                                NumberFormatter={
                                                    NumberFormatter
                                                }
                                                GetLogo={GetLogo}
                                                Values={Values}
                                            />
                                        </li>
                                    </ul>
                                )
                            )}
                        </div>
                    </>
                )
            ) : (
                <Loader />
            )}
        </section>
    );
};