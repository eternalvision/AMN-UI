import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const InterfaceButtons = ({
    DarkMode,
    LocalizationComponent,
    LanguageSets,
    Icon,
    useLanguage,
    GetLogo,
    userData,
    logoutUser,
    updateUserFinanceInfo,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedLang } = useLanguage();

    const { name, surname, username } = userData;

    const Values = LanguageSets.HeaderInterfaceButtons({ username })[
        selectedLang
    ];

    return (
        <>
            <LocalizationComponent
                updateUserFinanceInfo={updateUserFinanceInfo}
                userData={userData}
            />
            <DarkMode
                updateUserFinanceInfo={updateUserFinanceInfo}
                userData={userData}
            />
            <div>
                <section className="Dropdown">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {name} {surname}
                    </button>
                    <Dropdown
                        Values={Values}
                        isOpen={isOpen}
                        GetLogo={GetLogo}
                        logoutUser={logoutUser}
                    />
                </section>
            </div>
        </>
    );
};
