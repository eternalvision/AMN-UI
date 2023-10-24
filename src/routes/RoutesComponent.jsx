import { Route, Routes, Navigate } from "react-router-dom";

export const RoutesComponent = ({
    GetLogo,
    MainComponents,
    LanguageSets,
    selectedLang,
    useFetchData,
    FilteredData,
    useCurrentDate,
    NumberFormatter,
    Loader,
    userData,
    Login,
    ApiRequests,
    showUniqueToast,
}) => {
    const { Computational, Documentation, Employees, Profile, Settings } =
        MainComponents;
    const {
        updateUserFinanceInfo,
        patchWorkerData,
        getWorkerData,
        registerUser,
        deleteUser,
        getAllUsers,
        updateUserPassword,
        getUserByUsername,
    } = ApiRequests;

    const { username, profileType, workerId } = userData;
    if (userData.token.length > 0) {
        return (
            <Routes>
                <Route
                    path="/"
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
                            Loader={Loader}
                            userData={userData}
                            showUniqueToast={showUniqueToast}
                        />
                    }
                />
                <Route
                    path="/:username/settings"
                    element={
                        <Settings
                            GetLogo={GetLogo}
                            LanguageSets={LanguageSets}
                            selectedLang={selectedLang}
                            updateUserFinanceInfo={updateUserFinanceInfo}
                            profileType={profileType}
                            registerUser={registerUser}
                            deleteUser={deleteUser}
                            getAllUsers={getAllUsers}
                            updateUserPassword={updateUserPassword}
                            username={username}
                            workerId={workerId}
                            showUniqueToast={showUniqueToast}
                        />
                    }
                />
                <Route
                    path="/:username"
                    element={
                        <Profile
                            getUserByUsername={getUserByUsername}
                            authUsername={username}
                            showUniqueToast={showUniqueToast}
                        />
                    }
                />
                <Route
                    path="/computational/:date/:category"
                    element={
                        <Computational
                            GetLogo={GetLogo}
                            LanguageSets={LanguageSets}
                            selectedLang={selectedLang}
                            username={username}
                            NumberFormatter={NumberFormatter}
                            Loader={Loader}
                            patchWorkerData={patchWorkerData}
                            getWorkerData={getWorkerData}
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
                            Loader={Loader}
                        />
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route
                    path="/login"
                    element={<Login showUniqueToast={showUniqueToast} />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        );
    }
};
