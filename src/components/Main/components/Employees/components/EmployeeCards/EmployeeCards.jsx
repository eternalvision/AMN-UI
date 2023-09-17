import React, { useState } from "react";
import shortUUID from "short-uuid";
import { nanoid } from "nanoid";

const HotelCard = ({
    hotelName,
    positions,
    hotelAmount,
    NumberFormatter,
    GetLogo,
    Values,
}) => {
    const [searchValue, setSearchValue] = useState("");

    const filterEmployees = (
        searchValue,
        hotelName,
        positionName,
        employees
    ) => {
        if (!searchValue) return employees;
        const lowerCaseSearch = searchValue.toLowerCase();
        return employees.filter(
            (employee) =>
                employee.name.toLowerCase().includes(lowerCaseSearch) ||
                positionName.toLowerCase().includes(lowerCaseSearch) ||
                hotelName.toLowerCase().includes(lowerCaseSearch)
        );
    };

    const {
        searchText,
        hotelImage,
        cashImage,
        personImage,
        caseImage,
        timeImage,
        dollarImage,
        searchImage,
    } = Values[0];

    const uniqueSearchId = nanoid(6);

    return (
        <ul className="Employee-hotel-data" key={hotelName}>
            <li className="Employee-hotel__block">
                <ul>
                    <li className="Employee-hotel">
                        <GetLogo img={hotelImage} />
                        <span>
                            <b>{hotelName}</b>
                        </span>
                    </li>
                    <li className="Employee-allAmount">
                        <GetLogo img={cashImage} />
                        <span>
                            <b>
                                <NumberFormatter number={hotelAmount} />
                            </b>
                        </span>
                    </li>
                    <li className="Employee-filter">
                        <label htmlFor={uniqueSearchId}>
                            <GetLogo img={searchImage} />
                        </label>
                        <input
                            type="text"
                            id={uniqueSearchId}
                            placeholder={searchText}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </li>
                </ul>
            </li>

            {positions.map(({ positionName, employees }) => {
                const positionId = shortUUID.generate();
                const filteredEmployees = filterEmployees(
                    searchValue,
                    hotelName,
                    positionName,
                    employees
                );

                return (
                    <li key={positionId}>
                        {filteredEmployees.map(
                            ({ name, hours, rate, amount, recordId }) => {
                                return (
                                    <ul className="Employee" key={recordId}>
                                        <li>
                                            <ul>
                                                <li className="Employee-name">
                                                    <ul>
                                                        <li>
                                                            <GetLogo
                                                                img={
                                                                    personImage
                                                                }
                                                            />
                                                            <span>{name}</span>
                                                        </li>
                                                        <li>
                                                            <GetLogo
                                                                img={caseImage}
                                                            />
                                                            <span>
                                                                {positionName}
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <GetLogo
                                                                img={timeImage}
                                                            />
                                                            <NumberFormatter
                                                                number={hours}
                                                            />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="Employee-amount">
                                                    <ul>
                                                        <li>
                                                            <GetLogo
                                                                img={
                                                                    dollarImage
                                                                }
                                                            />
                                                            <NumberFormatter
                                                                number={rate}
                                                            />
                                                        </li>
                                                        <li>
                                                            <GetLogo
                                                                img={cashImage}
                                                            />
                                                            <NumberFormatter
                                                                number={amount}
                                                            />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                );
                            }
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export const EmployeeCards = ({ hotels, NumberFormatter, GetLogo, Values }) => {
    return hotels.map((hotel) => (
        <HotelCard
            key={hotel.hotelName}
            {...hotel}
            NumberFormatter={NumberFormatter}
            GetLogo={GetLogo}
            Values={Values}
        />
    ));
};
