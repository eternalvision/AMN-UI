import { useState, useEffect } from "react";
import { Components } from "./components/Components";
import { RoutesComponent } from "./routes/RoutesComponent";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const { Header, Main } = Components;

export const App = ({
    useDisableEvents,
    DarkMode,
    LocalizationComponent,
    LanguageSets,
    useLanguage,
    useDarkMode,
    useLocalStorageState,
    useCookieStorageState,
    NumberFormatter,
    GetLogo,
    Alert,
    useFetchData,
    FilteredData,
    useCurrentDate,
    Loader,
    ClassToggler,
    ApiRequests,
    Login,
    LanguageProvider,
    useUniqueToast,
    useUserData,
}) => {
    const navigate = useNavigate();
    const showUniqueToast = useUniqueToast();
    useDisableEvents();
    const { loginUser, logoutUser, getCurrentUser, updateUserFinanceInfo } =
        ApiRequests;

    const [currentUser, setCurrentUser] = useState(null);
    const token = Cookies.get("userToken");

    useEffect(() => {
        if (token) {
            const fetchAndSetUser = async () => {
                try {
                    const user = await getCurrentUser(token);
                    setCurrentUser(user);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchAndSetUser();
        }
    }, [getCurrentUser, token]);

    const userData = currentUser?.data || null;

    if (!token) {
        return (
            <Login
                onLoginSuccess={() => navigate("/")}
                loginUser={loginUser}
                useCookieStorageState={useCookieStorageState}
            />
        );
    } else if (userData) {
        return (
            <LanguageProvider initialLanguage={userData.language}>
                <ClassToggler useLocalStorageState={useLocalStorageState}>
                    {({ activeNoneClass, handleClick }) => (
                        <>
                            <Header
                                DarkMode={DarkMode}
                                LocalizationComponent={LocalizationComponent}
                                LanguageSets={LanguageSets}
                                useLanguage={useLanguage}
                                useDarkMode={useDarkMode}
                                GetLogo={GetLogo}
                                handleClick={handleClick}
                                userData={userData}
                                logoutUser={logoutUser}
                                updateUserFinanceInfo={updateUserFinanceInfo}
                            />
                            <Main
                                RoutesComponent={RoutesComponent}
                                useLocalStorageState={useLocalStorageState}
                                LanguageSets={LanguageSets}
                                useLanguage={useLanguage}
                                GetLogo={GetLogo}
                                useFetchData={useFetchData}
                                FilteredData={FilteredData}
                                useCurrentDate={useCurrentDate}
                                NumberFormatter={NumberFormatter}
                                Loader={Loader}
                                activeNoneClass={activeNoneClass}
                                ApiRequests={ApiRequests}
                                userData={userData}
                                Login={Login}
                                showUniqueToast={showUniqueToast}
                            />
                        </>
                    )}
                </ClassToggler>
            </LanguageProvider>
        );
    }
};
