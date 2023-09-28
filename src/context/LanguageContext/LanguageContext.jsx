import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage }) => {
    const [selectedLang, setSelectedLang] = useState(initialLanguage);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
    };

    return (
        <LanguageContext.Provider value={{ selectedLang, handleLangChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
