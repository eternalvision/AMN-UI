import { useState } from "react";
import { Languages } from "./Languages";
import { useLanguage } from "../../context/LanguageContext/LanguageContext";
const shortId = require("short-uuid");

const Values = Languages.LocalizationButtons();

export const LocalizationComponent = ({ updateUserFinanceInfo, userData }) => {
    const initialLanguageItem = Values.find(
        (item) => item.textId === userData.language
    );

    const [activeId, setActiveId] = useState(
        initialLanguageItem ? initialLanguageItem.id : 1
    );

    const { handleLangChange } = useLanguage();

    const updateLanguageInBackend = async (newLanguage) => {
        try {
            await updateUserFinanceInfo({ language: newLanguage });
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (id, textId) => {
        handleLangChange(textId);
        setActiveId(id);
        updateLanguageInBackend(textId);
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
