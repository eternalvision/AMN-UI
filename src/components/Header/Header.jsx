import { HeaderComponents } from "./components/HeaderComponents";

const { Logo, InterfaceButtons } = HeaderComponents;

export const Header = ({
    DarkMode,
    LocalizationComponent,
    LanguageSets,
    useLanguage,
    useDarkMode,
    handleClick,
    GetLogo,
    userData,
    logoutUser,
    updateUserFinanceInfo,
}) => {
    return (
        <header className="Header">
            <ul className="Menu-list">
                <li className="Left-header-content">
                    <Logo handleClick={handleClick} />
                </li>

                <li className="Right-header-content">
                    <InterfaceButtons
                        DarkMode={DarkMode}
                        LocalizationComponent={LocalizationComponent}
                        LanguageSets={LanguageSets}
                        useLanguage={useLanguage}
                        useDarkMode={useDarkMode}
                        GetLogo={GetLogo}
                        userData={userData}
                        logoutUser={logoutUser}
                        updateUserFinanceInfo={updateUserFinanceInfo}
                    />
                </li>
            </ul>
        </header>
    );
};
