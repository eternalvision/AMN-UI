import { Users } from "./Users";

export const Registration = ({
    registerUser,
    deleteUser,
    getAllUsers,
    LanguageSets,
    selectedLang,
    GetLogo,
    username,
    Form,
    showUniqueToast,
}) => {
    const initialState = {
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        linkToPhoto:
            "https://i.ibb.co/bRLH3S4/istockphoto-1276619045-612x612.jpg",
        profileType: "",
    };

    const Values = LanguageSets.RegistrationElements()[selectedLang][0];

    const {
        textRegister,
        textTitle,
        RegistrationSuccessful,
        RegistrationError,
    } = Values;

    const handleSubmit = async (formData) => {
        const filteredFormData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
        );

        try {
            const response = await registerUser(filteredFormData);
            if (response && response.data && response.data.token) {
                showUniqueToast(
                    `${response.code}, ${response.status}, ${response.message}: ${RegistrationSuccessful}`
                );
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            console.error(error);
            showUniqueToast(
                `${error.code}, ${error.status}, ${error.message}: ${RegistrationError}`,
                false
            );
        }
    };

    return (
        <>
            <div>
                <h2 style={{ marginBottom: "20px" }}>{textTitle}</h2>

                <Form
                    LanguageSets={LanguageSets}
                    selectedLang={selectedLang}
                    onSubmit={handleSubmit}
                    initialState={initialState}
                    textButton={textRegister}
                    showProfileType={true}
                    showPassword={true}
                    minFieldsRequired={Object.keys(initialState).length}
                    GetLogo={GetLogo}
                />
            </div>
            <Users
                deleteUser={deleteUser}
                getAllUsers={getAllUsers}
                LanguageSets={LanguageSets}
                selectedLang={selectedLang}
                GetLogo={GetLogo}
                username={username}
                showUniqueToast={showUniqueToast}
            />
        </>
    );
};
