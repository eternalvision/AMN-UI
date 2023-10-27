import { useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = "https://pa.asmis.cz";

export const useFetchData = ({ currentYear, month, asmisToken }) => {
    const [dataState, setDataState] = useState({
        items: "",
        result: "",
        error: "",
    });

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${API_ENDPOINT}/api/stats/payments/units/${currentYear}${month}/?token=${asmisToken}`
                );
                if (isMounted) {
                    setDataState({
                        items: response.data,
                        result: response,
                        error: "",
                    });
                }
            } catch (err) {
                setDataState((prevState) => ({
                    ...prevState,
                    error: `Asmis: ${err.code}, ${err.message}`,
                }));
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [currentYear, month, asmisToken]);

    return dataState;
};
