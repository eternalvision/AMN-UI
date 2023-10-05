import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import { Context } from "./context/Context";
import { Assets } from "./assets/Assets";
import { Helpers } from "./helpers/Helpers";
import { Hooks } from "./hooks/Hooks";

import { ApiRequests } from "./api/apiClient";
import { AuthorizationComponents } from "./authorization/Components";

import "normalize.css";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./css/index.min.css";

const {
    LanguageProvider,
    useLanguage,
    DarkModeProvider,
    useDarkMode,
    UserDataProvider,
    useUserData,
} = Context;
const {
    useFetchData,
    useCurrentDate,
    useLocalStorageState,
    useCookieStorageState,
    useDisableEvents,
} = Hooks;
const { Icon } = Assets;
const {
    Alert,
    ClassToggler,
    DarkMode,
    GetLogo,
    Loader,
    LanguageSets,
    LocalizationComponent,
    NumberFormatter,
    FilteredData,
} = Helpers;

const { Login } = AuthorizationComponents;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DarkModeProvider>
                <App
                    useLanguage={useLanguage}
                    useDarkMode={useDarkMode}
                    DarkMode={DarkMode}
                    LocalizationComponent={LocalizationComponent}
                    LanguageSets={LanguageSets}
                    Loader={Loader}
                    Icon={Icon}
                    useDisableEvents={useDisableEvents}
                    useLocalStorageState={useLocalStorageState}
                    useCookieStorageState={useCookieStorageState}
                    NumberFormatter={NumberFormatter}
                    GetLogo={GetLogo}
                    Alert={Alert}
                    useFetchData={useFetchData}
                    FilteredData={FilteredData}
                    useCurrentDate={useCurrentDate}
                    ClassToggler={ClassToggler}
                    ApiRequests={ApiRequests}
                    Login={Login}
                    LanguageProvider={LanguageProvider}
                    UserDataProvider={UserDataProvider}
                    useUserData={useUserData}
                />
            </DarkModeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
