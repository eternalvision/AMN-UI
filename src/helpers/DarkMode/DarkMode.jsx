import { useEffect, useRef } from "react";
import { useDarkMode } from "../../context/DarkModeContext/DarkModeContext";
import { RiSunLine, RiMoonFill } from "react-icons/ri";

export const DarkMode = () => {
    const { theme, setTheme } = useDarkMode();
    const bodyRef = useRef(document.body);

    useEffect(() => {
        const { current } = bodyRef;
        current.classList.remove("light", "dark");
        current.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <section className="DarkMode">
            <button onClick={toggleTheme}>
                {theme === "light" ? <RiSunLine /> : <RiMoonFill />}
            </button>
        </section>
    );
};
