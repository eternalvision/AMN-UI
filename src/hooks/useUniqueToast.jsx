import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export const useUniqueToast = () => {
    const [prevLocation, setPrevLocation] = useState(null);
    const shownMessages = useRef(new Set());
    const location = useLocation();

    useEffect(() => {
        if (prevLocation !== location.pathname) {
            // Если предыдущий маршрут отличается от текущего, очистить shownMessages
            shownMessages.current.clear();
            setPrevLocation(location.pathname); // Обновить предыдущий маршрут
        }
    }, [location.pathname, prevLocation]);

    const showUniqueToast = (message, isSuccess = true) => {
        if (!shownMessages.current.has(message)) {
            if (isSuccess) {
                toast.success(message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            } else {
                toast.error(message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
            shownMessages.current.add(message);
        }
    };

    return showUniqueToast;
};
