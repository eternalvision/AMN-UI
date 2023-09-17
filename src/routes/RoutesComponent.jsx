import { Route, Routes, Navigate } from "react-router-dom";

export const RoutesComponent = ({
    GetLogo,
    MainComponents,
    LanguageSets,
    selectedLang,
    username,
    useFetchData,
    FilteredData,
    useCurrentDate,
    NumberFormatter,
}) => {
    const { Computational, Documentation, Employees, Profile, Settings } =
        MainComponents;
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/:username/employees" />} />
            <Route path="/" element={<Navigate to="/:username/employees" />} />
            <Route
                path="/:username/settings"
                element={
                    <Settings
                        GetLogo={GetLogo}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        username={username}
                    />
                }
            />
            <Route
                path="/:username"
                element={
                    <Profile
                        GetLogo={GetLogo}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        username={username}
                    />
                }
            />
            <Route
                path="/:username/computational/:date/:category"
                element={
                    <Computational
                        GetLogo={GetLogo}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        username={username}
                    />
                }
            />
            <Route
                path="/:username/employees"
                element={
                    <Employees
                        GetLogo={GetLogo}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        username={username}
                        useFetchData={useFetchData}
                        FilteredData={FilteredData}
                        useCurrentDate={useCurrentDate}
                        NumberFormatter={NumberFormatter}
                    />
                }
            />
            <Route
                path="/documentation"
                element={
                    <Documentation
                        GetLogo={GetLogo}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                    />
                }
            />
        </Routes>
    );
};
