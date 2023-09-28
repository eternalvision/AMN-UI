import { useEffect, useRef } from "react";
import { useDarkMode } from "../../context/DarkModeContext/DarkModeContext";
import { RiSunLine, RiMoonFill } from "react-icons/ri";

export const DarkMode = ({ updateUserFinanceInfo, userData }) => {
    const { theme, setTheme } = useDarkMode();
    const bodyRef = useRef(document.body);

    useEffect(() => {
        if (userData.theme === "light" || userData.theme === "dark") {
            setTheme(userData.theme);
        }
    }, [setTheme, userData]);

    useEffect(() => {
        const { current } = bodyRef;
        current.classList.remove("light", "dark");
        current.classList.add(theme);
    }, [theme]);

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        try {
            await updateUserFinanceInfo({ theme: newTheme });
            setTheme(newTheme);
        } catch (error) {
            console.error("Ошибка при обновлении темы:", error);
        }
    };

    return (
        <section className="DarkMode">
            <button onClick={toggleTheme}>
                {theme === "light" ? <RiSunLine /> : <RiMoonFill />}
            </button>
        </section>
    );
};
