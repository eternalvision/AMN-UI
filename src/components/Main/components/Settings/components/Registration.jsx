import { useState } from "react";
import { Users } from "./Users";

export const Registration = ({
    registerUser,
    deleteUser,
    getAllUsers,
    LanguageSets,
    selectedLang,
}) => {
    const initialState = {
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        linkToPhoto: "",
        profileType: "user",
    };
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

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

    const Values =
        LanguageSets.RegistrationElements &&
        LanguageSets.RegistrationElements()[selectedLang][0];

    const {
        textName,
        textSurname,
        textUsername,
        textEmail,
        textPhoneNumber,
        textPhotoLink,
        textPassword,
        textProfileType,
        textRegister,
        textTitle,
        textUser,
        textAdmin,
    } = Values || {};

    return (
        <>
            <div>
                <h2 style={{ marginBottom: "20px" }}>{textTitle}</h2>

                <form className="Registration-form" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label>
                                <p>{textName}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    className="Registration-inputs"
                                    value={formData.name}
                                    placeholder={textName}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textSurname}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="surname"
                                    className="Registration-inputs"
                                    value={formData.surname}
                                    placeholder={textSurname}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textUsername}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="username"
                                    className="Registration-inputs"
                                    value={formData.username}
                                    placeholder={textUsername}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textEmail}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="email"
                                    name="email"
                                    className="Registration-inputs"
                                    value={formData.email}
                                    placeholder={textEmail}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textPhoneNumber}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="tel"
                                    name="phoneNumber"
                                    className="Registration-inputs"
                                    value={formData.phoneNumber}
                                    placeholder={textPhoneNumber}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textPassword}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    className="Registration-inputs"
                                    value={formData.password}
                                    placeholder={textPassword}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textPhotoLink}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="url"
                                    name="linkToPhoto"
                                    className="Registration-inputs"
                                    value={formData.linkToPhoto}
                                    placeholder={textPhotoLink}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textProfileType}</p>
                                <select
                                    name="profileType"
                                    onChange={handleInputChange}
                                    value={formData.profileType}
                                    className="Registration-select">
                                    <option value="user">{textUser}</option>
                                    <option value="admin">{textAdmin}</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <button
                                className="Registration-register-btn"
                                type="submit">
                                <span>{textRegister}</span>
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
            <Users
                deleteUser={deleteUser}
                getAllUsers={getAllUsers}
                LanguageSets={LanguageSets}
                selectedLang={selectedLang}
            />
        </>
    );
};
