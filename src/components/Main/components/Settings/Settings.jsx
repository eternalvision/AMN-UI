import { useState } from "react";

export const Settings = ({
    GetLogo,
    LanguageSets,
    selectedLang,
    updateUserFinanceInfo,
}) => {
    const Values = LanguageSets.SettingsElements()[selectedLang][0];
    const {
        textName,
        textSurname,
        textUsername,
        textEmail,
        textPhoneNumber,
        textPhotoLink,
        textSave,
    } = Values;

    const initialState = {
        name: "",
        surname: "",
        username: "",
        email: "",
        phoneNumber: "",
        linkToPhoto: "",
    };

    const [originalData, setOriginalData] = useState(initialState);

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedFields = Object.entries(formData).reduce(
            (acc, [key, value]) => {
                if (originalData[key] !== value) {
                    acc[key] = value;
                }
                return acc;
            },
            {}
        );

        const result = updateUserFinanceInfo(updatedFields);
        if (result) {
            window.location.reload();
        }

        clearInput();
    };

    const clearInput = () => {
        setFormData(initialState);
    };

    return (
        <section className="Settings">
            <div>
                <form className="Settings-form" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label>
                                <p>{textName}</p>
                                <input
                                    onChange={handleInputChange}
                                    type="name"
                                    name="name"
                                    className="Settings-inputs"
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
                                    type="surname"
                                    name="surname"
                                    className="Settings-inputs"
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
                                    type="username"
                                    name="username"
                                    className="Settings-inputs"
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
                                    lang="en"
                                    className="Settings-inputs"
                                    maxLength="254"
                                    value={formData.email}
                                    placeholder={textEmail}
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    autoCorrect="off"
                                    inputMode="email"
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textPhoneNumber}</p>
                                <input
                                    className="Settings-inputs"
                                    onChange={handleInputChange}
                                    type="tel"
                                    id="phone"
                                    name="phoneNumber"
                                    value={formData.phone}
                                    placeholder={textPhoneNumber}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>{textPhotoLink}</p>
                                <input
                                    className="Settings-inputs"
                                    onChange={handleInputChange}
                                    type="url"
                                    value={formData.linkToPhoto}
                                    placeholder={textPhotoLink}
                                />
                            </label>
                        </li>
                        <li>
                            <button className="Settings-save-btn" type="submit">
                                <span>{textSave}</span>
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
};
