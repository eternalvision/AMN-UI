import { useState, useEffect } from "react";

export const useCookieStorageState = ({ key, initialValue, days }) => {
    const getCookie = (cookieName) => {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    const setCookie = (cookieName, value, expiryDays) => {
        const d = new Date();
        d.setTime(d.getTime() + expiryDays * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
    };

    const [state, setState] = useState(() => {
        const storedValue = getCookie(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        setCookie(key, JSON.stringify(state), days);
    }, [key, state, days]);

    return [state, setState];
};
