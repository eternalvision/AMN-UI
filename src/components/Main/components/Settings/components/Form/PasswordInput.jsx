import { useState } from "react";
import { ValidationHelper } from "./ValidationHelper";

const PasswordInput = ({
    text,
    onChange,
    name,
    value,
    placeholder,
    errors,
    visiblePassword,
    setVisiblePassword,
    hiddenIco,
    visibleIco,
    GetLogo,
    validate,
}) => {
    return (
        <li className="Registration-Password-Item">
            <label>
                <p>{text}</p>
                <input
                    onChange={onChange}
                    type={visiblePassword ? "text" : "password"}
                    name={name}
                    className="Settings-inputs"
                    value={value}
                    placeholder={placeholder}
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

export const ChangePasswordForm = ({
    LanguageSets,
    selectedLang,
    updateUserPassword,
    GetLogo,
    showUniqueToast,
}) => {
    const [formData, setFormData] = useState({ password: "" });
    const [errors, setErrors] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);

    const validation = ValidationHelper(LanguageSets, selectedLang).validate;

    const {
        textPassword,
        showPassIcoHidden,
        ShowPassIcoVisible,
        textPasswordEdit,
        passAlertOk,
        passAlertBad,
    } = LanguageSets.PasswordValidate()[selectedLang][0];

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await updateUserPassword(formData.password);
            showUniqueToast(passAlertOk);
            if (result) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
            showUniqueToast(passAlertBad, false);
        }
    };

    return (
        <>
            <h2>{textPassword}</h2>
            <form className="Registration-form" onSubmit={handleSubmit}>
                <ul>
                    <PasswordInput
                        errors={errors}
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                        text={textPassword}
                        placeholder={textPassword}
                        visiblePassword={visiblePassword}
                        setVisiblePassword={setVisiblePassword}
                        hiddenIco={showPassIcoHidden}
                        visibleIco={ShowPassIcoVisible}
                        GetLogo={GetLogo}
                    />
                    {!errors.password && formData.password && (
                        <li>
                            <button className="Settings-save-btn" type="submit">
                                {textPasswordEdit}
                            </button>
                        </li>
                    )}
                </ul>
            </form>
        </>
    );
};
