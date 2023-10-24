import { useState, useEffect } from "react";
import { ValidationHelper } from "./ValidationHelper";

const ALLOWED_LETTERS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ" +
    "AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ" +
    "aábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž";

const ALLOWED_LETTERS_PASSWORD =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "0123456789" +
    `-._~:/?#[]@!$&'()*+,;="'^%`;

const ALLOWED_LETTER_USERNAME =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const ALLOWED_URL_CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~:/?#[]@!$&'()*+,;=";

const ALLOWED_PHONE_CHARS = "0123456789-()+ ";

const preventInput = (e, allowedChars) => {
    if (
        !allowedChars.includes(e.key) &&
        ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].indexOf(
            e.key
        ) === -1
    ) {
        e.preventDefault();
    }
};

const InputField = ({
    errors,
    text,
    type,
    name,
    onChange,
    onKeyDown,
    value,
    minLength,
    maxLength,
    placeholder,
}) => (
    <li>
        <label>
            <p>{text}</p>
            <input
                onChange={onChange}
                type={type}
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                className="Settings-inputs"
                value={value}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
            />
        </label>
        {errors[name] && <span className="error">{errors[name]}</span>}
    </li>
);

const NameInput = (props) => (
    <InputField
        type="name"
        onKeyDown={(e) => preventInput(e, ALLOWED_LETTERS)}
        {...props}
    />
);

const SurnameInput = (props) => (
    <InputField
        type="surname"
        onKeyDown={(e) => preventInput(e, ALLOWED_LETTERS)}
        {...props}
    />
);

const UsernameInput = (props) => (
    <InputField
        type="username"
        onKeyDown={(e) => preventInput(e, ALLOWED_LETTER_USERNAME)}
        {...props}
    />
);

const EmailInput = (props) => (
    <InputField
        type="email"
        onKeyDown={(e) => preventInput(e, ALLOWED_URL_CHARS)}
        {...props}
    />
);

const PhoneNumberInput = (props) => (
    <InputField
        type="tel"
        onKeyDown={(e) => preventInput(e, ALLOWED_PHONE_CHARS)}
        {...props}
    />
);

const PasswordInput = ({
    text,
    onChange,
    name,
    minLength,
    maxLength,
    value,
    placeholder,
    visiblePassword,
    setVisiblePassword,
    errors,
    hiddenIco,
    visibleIco,
    GetLogo,
    showUniqueToast,
}) => {
    return (
        <li className="Registration-Password-Item">
            <label>
                <p>{text}</p>
                <input
                    onChange={onChange}
                    type={visiblePassword ? "text" : "password"}
                    name={name}
                    minLength={minLength}
                    maxLength={maxLength}
                    className="Settings-inputs"
                    value={value}
                    placeholder={placeholder}
                    onKeyDown={(e) => preventInput(e, ALLOWED_LETTERS_PASSWORD)}
                />
                {value.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setVisiblePassword(!visiblePassword)}>
                        {GetLogo &&
                            (visiblePassword ? (
                                <GetLogo img={visibleIco} />
                            ) : (
                                <GetLogo img={hiddenIco} />
                            ))}
                    </button>
                )}
            </label>
            {errors[name] && <span className="error">{errors[name]}</span>}
        </li>
    );
};

const PhotoLinkInput = (props) => (
    <InputField
        type="url"
        onKeyDown={(e) => preventInput(e, ALLOWED_URL_CHARS)}
        {...props}
    />
);

export const Form = ({
    LanguageSets,
    selectedLang,
    onSubmit,
    initialState,
    textButton,
    showProfileType,
    showPassword,
    allFieldsRequired,
    minFieldsRequired,
    GetLogo,
    showUniqueToast,
}) => {
    const [formData, setFormData] = useState(initialState);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [errors, setErrors] = useState({});
    let initialFormData = initialState;

    const validation = ValidationHelper(LanguageSets, selectedLang).validate;

    const shouldDisableButton = () =>
        !allFieldsFilled() ||
        !isFormValid() ||
        (allFieldsRequired && !isFormChanged());

    const isFormChanged = () => {
        for (const key in formData) {
            if (formData[key] !== initialFormData[key]) return true;
        }
        return false;
    };

    const isFormValid = () => {
        for (const key in errors) {
            if (errors[key]) return false;
        }
        return true;
    };

    const allFieldsFilled = () => {
        const filledFieldsCount = Object.values(formData).filter(
            (val) => val
        ).length;
        return filledFieldsCount >= minFieldsRequired;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));

        if (validation[name]) {
            const error = value ? validation[name](value.trim()) : "";
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const changedData = {};
        for (const key in formData) {
            if (
                formData[key] !== initialFormData[key] &&
                formData[key] !== ""
            ) {
                changedData[key] = formData[key];
            }
        }

        onSubmit(changedData);
    };

    const {
        textName,
        textSurname,
        textUsername,
        textEmail,
        textPhoneNumber,
        textPassword,
        textPhotoLink,
        textProfileType,
        textUser,
        textAdmin,
        showPassIcoHidden,
        ShowPassIcoVisible,
    } = LanguageSets.RegistrationElements()[selectedLang][0];

    useEffect(() => {
        const newErrors = {};
        let hasChanged = false;

        for (const name in formData) {
            if (validation[name]) {
                newErrors[name] = formData[name]
                    ? validation[name](formData[name].trim())
                    : "";
                if (newErrors[name] !== errors[name]) {
                    hasChanged = true;
                }
            }
        }

        if (hasChanged) {
            setErrors(newErrors);
        }
    }, [selectedLang, formData, validation, errors]);

    return (
        <form className="Registration-form" onSubmit={handleSubmit}>
            <ul>
                <NameInput
                    errors={errors}
                    text={textName}
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    minLength={3}
                    maxLength={20}
                    placeholder={textName}
                />
                <SurnameInput
                    errors={errors}
                    text={textSurname}
                    name="surname"
                    onChange={handleInputChange}
                    value={formData.surname}
                    minLength={3}
                    maxLength={20}
                    placeholder={textSurname}
                />
                <UsernameInput
                    errors={errors}
                    text={textUsername}
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                    minLength={5}
                    maxLength={15}
                    placeholder={textUsername}
                />
                <EmailInput
                    errors={errors}
                    text={textEmail}
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    minLength={4}
                    maxLength={256}
                    placeholder={textEmail}
                />
                <PhoneNumberInput
                    errors={errors}
                    text={textPhoneNumber}
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    minLength={5}
                    maxLength={15}
                    placeholder={textPhoneNumber}
                />
                {showPassword && (
                    <PasswordInput
                        text={textPassword}
                        errors={errors}
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                        minLength={8}
                        placeholder={textPassword}
                        visiblePassword={visiblePassword}
                        setVisiblePassword={setVisiblePassword}
                        hiddenIco={showPassIcoHidden}
                        visibleIco={ShowPassIcoVisible}
                        GetLogo={GetLogo}
                        showUniqueToast={showUniqueToast}
                    />
                )}
                <PhotoLinkInput
                    errors={errors}
                    text={textPhotoLink}
                    name="linkToPhoto"
                    onChange={handleInputChange}
                    value={formData.linkToPhoto}
                    minLength={5}
                    maxLength={250}
                    placeholder={textPhotoLink}
                />
                {showProfileType && (
                    <li>
                        <label>
                            <p>{textProfileType}</p>
                            <select
                                name="profileType"
                                value={formData.profileType}
                                onChange={handleInputChange}
                                className="Registration-select">
                                <option value="user">{textUser}</option>
                                <option value="admin">{textAdmin}</option>
                            </select>
                            {errors.profileType && (
                                <span className="error">
                                    {errors.profileType}
                                </span>
                            )}
                        </label>
                    </li>
                )}
                {!shouldDisableButton() && (
                    <li>
                        <button
                            className={`Settings-save-btn ${
                                shouldDisableButton() ? "DisabledButton" : ""
                            }`}
                            type="submit"
                            disabled={shouldDisableButton()}>
                            <span>{textButton}</span>
                        </button>
                    </li>
                )}
            </ul>
        </form>
    );
};
