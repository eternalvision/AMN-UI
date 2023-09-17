import { useCallback, useState } from "react";

export const EmployeeInterfaceBtn = ({
    month,
    setMonth,
    currentYear,
    setCurrentYear,
    dateY,
    dateM,
    totalPages,
    LanguageSets,
    selectedLang,
    GetLogo,
}) => {
    const { textYear, textMonth, imageRight, imageLeft } =
        LanguageSets.PaginationInterfaceElements()[selectedLang][0];
    const parsedMonth = Number(month);
    const [isPrevDisabled, setIsPrevDisabled] = useState(currentYear === 1);
    const [isNextDisabled, setIsNextDisabled] = useState(
        currentYear === totalPages
    );

    const handleForwardClick = useCallback(() => {
        if (parsedMonth < 12) {
            setMonth(`0${parsedMonth + 1}`.slice(-2));
        } else {
            setCurrentYear((prevYear) => prevYear + 1);
            setMonth("01");
        }
        setIsPrevDisabled(currentYear === 1 && parsedMonth === 1);
        setIsNextDisabled(currentYear === totalPages && parsedMonth === 12);
    }, [parsedMonth, setMonth, setCurrentYear, currentYear, totalPages]);

    const handleBackwardClick = useCallback(() => {
        console.log("Текущий месяц:", parsedMonth, "Текущий год:", currentYear);
        if (parsedMonth > 1) {
            setMonth((prevMonth) => `0${Number(prevMonth) - 1}`.slice(-2));

            console.log(
                "Месяц должен быть обновлен на:",
                `0${parsedMonth - 1}`.slice(-2)
            );
        } else {
            if (currentYear > 1) {
                setCurrentYear(currentYear - 1);
                console.log(`Год обновлен на: ${currentYear - 1}`);
                setMonth("12");
            }
        }
        setIsPrevDisabled(currentYear <= 1 && parsedMonth <= 1);
        setIsNextDisabled(currentYear >= totalPages && parsedMonth >= 12);
    }, [parsedMonth, setMonth, setCurrentYear, currentYear, totalPages]);

    const handlePrevPage = useCallback(() => {
        const newYear = currentYear - 1;
        setCurrentYear(newYear);
        setIsPrevDisabled(newYear === 1);
        setIsNextDisabled(newYear === totalPages);
    }, [currentYear, setCurrentYear, totalPages]);

    const handleNextPage = useCallback(() => {
        const newYear = currentYear + 1;
        setCurrentYear(newYear);
        setIsPrevDisabled(newYear === 1);
        setIsNextDisabled(newYear === totalPages);
    }, [currentYear, setCurrentYear, totalPages]);

    return (
        <div className="Employee-interface">
            <ul className="Empoloyees-pagination__interface">
                <li className="Employee-date-info">
                    <ul className="Employee-date">
                        <li>{`${dateY}.${dateM}`}</li>
                    </ul>
                </li>
                <li>
                    <ul className="Employee-btns">
                        <li>
                            <button
                                onClick={handlePrevPage}
                                disabled={isPrevDisabled}>
                                <GetLogo img={imageLeft} />
                                <span>{textYear}</span>
                            </button>
                            <button
                                onClick={handleBackwardClick}
                                disabled={parsedMonth <= 1}>
                                <GetLogo img={imageLeft} />
                                <span>{textMonth}</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleNextPage}
                                disabled={isNextDisabled}>
                                <span>{textYear}</span>
                                <GetLogo img={imageRight} />
                            </button>
                            <button onClick={handleForwardClick}>
                                <span>{textMonth}</span>
                                <GetLogo img={imageRight} />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
