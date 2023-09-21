import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import { Context } from "./context/Context";
import { Assets } from "./assets/Assets";
import { Helpers } from "./helpers/Helpers";
import { Hooks } from "./hooks/Hooks";

import "normalize.css";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./css/index.min.css";

const { LanguageProvider, useLanguage, DarkModeProvider, useDarkMode } =
    Context;
const { useFetchData, useCurrentDate, useLocalStorageState, useDisableEvents } =
    Hooks;
const { Icon } = Assets;
const {
    Alert,
    DarkMode,
    GetLogo,
    Loader,
    LanguageSets,
    LocalizationComponent,
    NumberFormatter,
    FilteredData,
} = Helpers;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LanguageProvider>
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
                        NumberFormatter={NumberFormatter}
                        GetLogo={GetLogo}
                        Alert={Alert}
                        useFetchData={useFetchData}
                        FilteredData={FilteredData}
                        useCurrentDate={useCurrentDate}
                    />
                </DarkModeProvider>
            </LanguageProvider>
        </BrowserRouter>
    </React.StrictMode>
);
