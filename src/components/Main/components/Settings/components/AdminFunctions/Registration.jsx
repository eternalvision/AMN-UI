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

    const handleSubmit = async (formData) => {
        const filteredFormData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
        );

        console.log(filteredFormData);
        try {
            const response = await registerUser(filteredFormData);
            if (response && response.data && response.data.token) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const Values = LanguageSets.RegistrationElements()[selectedLang][0];

    const { textRegister, textTitle } = Values;

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
            />
        </>
    );
};
