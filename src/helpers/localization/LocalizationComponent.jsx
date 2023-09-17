import { useState } from "react";
import { Languages } from "./Languages";
import { useLanguage } from "../../context/LanguageContext/LanguageContext";
const shortId = require("short-uuid");

const Values = Languages.LocalizationButtons();

export const LocalizationComponent = () => {
    const [activeId, setActiveId] = useState(1);
    const { handleLangChange } = useLanguage();

    const handleClick = (id, textId) => {
        handleLangChange(textId);
        setActiveId(id);
    };

    return (
        <section className="Localization">
            {Values.map(({ id, text, textId }) => (
                <button
                    key={shortId.generate()}
                    onClick={() => handleClick(id, textId)}
                    className={
                        activeId === id ? "activeLanguage" : "inactiveLanguage"
                    }>
                    {text}
                </button>
            ))}
        </section>
    );
};

export const LanguageSets = { ...Languages };
