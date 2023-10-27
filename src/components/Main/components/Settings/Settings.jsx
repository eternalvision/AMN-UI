import { SettingsComponents } from "./components/SettingsComponents";

const { Registration, Form, ChangePasswordForm } = SettingsComponents;

export const Settings = ({
    LanguageSets,
    selectedLang,
    updateUserFinanceInfo,
    profileType,
    registerUser,
    deleteUser,
    getAllUsers,
    updateUserPassword,
    GetLogo,
    username,
    workerId,
    showUniqueToast,
}) => {
    const { textSave, textTitle, settingsAlert, settingsAlertBad } =
        LanguageSets.SettingsElements()[selectedLang][0];

    const initialState = {
        name: "",
        surname: "",
        username: "",
        email: "",
        phoneNumber: "",
        linkToPhoto: "",
    };

    const handleSubmit = async (formData) => {
        if (Object.values(formData).every((val) => !val)) {
            return;
        }

        try {
            const result = await updateUserFinanceInfo(formData);

            if (result) {
                showUniqueToast(
                    `${result.code}, ${result.status}, ${result.message}: ${settingsAlert}`
                );
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            console.error(error);
            showUniqueToast(
                `${error.code}, ${error.status}, ${error.message}: ${settingsAlertBad}`,
                false
            );
        }
    };

    return (
        <section className="Settings">
            <section>
                <div>
                    <h2 style={{ marginBottom: "20px" }}>{textTitle}</h2>
                    <Form
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        onSubmit={handleSubmit}
                        initialState={initialState}
                        minFieldsRequired={1}
                        textButton={textSave}
                        allFieldsRequired={false}
                        GetLogo={GetLogo}
                    />
                </div>
                <div>
                    <ChangePasswordForm
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        updateUserPassword={updateUserPassword}
                        workerId={workerId}
                        GetLogo={GetLogo}
                        showUniqueToast={showUniqueToast}
                    />
                </div>
            </section>
            {profileType === "admin" && (
                <Registration
                    registerUser={registerUser}
                    deleteUser={deleteUser}
                    getAllUsers={getAllUsers}
                    updateUserPassword={updateUserPassword}
                    LanguageSets={LanguageSets}
                    selectedLang={selectedLang}
                    GetLogo={GetLogo}
                    Form={Form}
                    username={username}
                    showUniqueToast={showUniqueToast}
                />
            )}
        </section>
    );
};
