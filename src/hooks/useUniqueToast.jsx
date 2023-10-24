import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export const useUniqueToast = () => {
    const [prevLocation, setPrevLocation] = useState(null);
    const shownMessages = useRef(new Map()); // Изменено на Map для хранения таймеров
    const location = useLocation();

    useEffect(() => {
        if (prevLocation !== location.pathname) {
            // Очистка всех таймеров
            shownMessages.current.forEach((timerId) => {
                clearTimeout(timerId);
            });

            // Очистка shownMessages
            shownMessages.current.clear();
            setPrevLocation(location.pathname); // Обновление предыдущего маршрута
        }
    }, [location.pathname, prevLocation]);

    const showUniqueToast = (message, isSuccess = true) => {
        const commonOptions = {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
            style: {
                background: "#333",
                color: "#fff",
                borderRadius: "12px",
            },
        };

        // Получить существующий таймер для этого сообщения, если есть
        const existingTimer = shownMessages.current.get(message);

        if (!existingTimer) {
            if (isSuccess) {
                toast.success(message, {
                    position: toast.POSITION.BOTTOM_LEFT,
                    ...commonOptions,
                });
            } else {
                toast.error(message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    ...commonOptions,
                });
            }

            // Установка нового таймера для блокировки повторного вызова в течение 4 секунд
            const timerId = setTimeout(() => {
                shownMessages.current.delete(message);
            }, 4000);

            shownMessages.current.set(message, timerId);
        }
    };

    return showUniqueToast;
};
