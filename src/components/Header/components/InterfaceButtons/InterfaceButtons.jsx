import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const InterfaceButtons = ({
    DarkMode,
    LocalizationComponent,
    LanguageSets,
    Icon,
    useLanguage,
    GetLogo,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const name = "Alexandr Priadchenko";
    const username = "eternalvision";
    const { selectedLang } = useLanguage();

    const Values = LanguageSets.HeaderInterfaceButtons({ username })[
        selectedLang
    ];

    return (
        <>
            <LocalizationComponent />
            <DarkMode />
            <div>
                <section className="Dropdown">
                    <button onClick={() => setIsOpen(!isOpen)}>{name}</button>
                    <Dropdown
                        Values={Values}
                        isOpen={isOpen}
                        GetLogo={GetLogo}
                    />
                </section>
            </div>
        </>
    );
};
