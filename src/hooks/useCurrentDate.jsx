import { useState } from "react";

export const useCurrentDate = () => {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;

    const [currentYear, setCurrentYear] = useState(y);
    const [month, setMonth] = useState(`0${m}`.slice(-2));

    return { currentYear, setCurrentYear, month, setMonth };
};
