import { useState, useCallback } from "react";
import Cookies from "js-cookie";
import { useUniqueToast } from "../../hooks/useUniqueToast";

export const Login = ({ loginUser, onLoginSuccess }) => {
    const showUniqueToast = useUniqueToast();

    const [formData, setFormData] = useState({
        email: {
            value: "",
        },
        password: {
            value: "",
        },
    });

    const handleChange = useCallback((name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: {
                ...prevData[name],
                value,
            },
        }));
    }, []);

    const clearInput = () => {
        setFormData({
            email: { value: "" },
            password: { value: "" },
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser({
                email: formData.email.value,
                password: formData.password.value,
            });

            if (response && response.data && response.data.token) {
                Cookies.set("userToken", response.data.token, {
                    expires: response.data.expiresToken / (60 * 60 * 24),
                });
                const { message, status } = response;
                showUniqueToast(`${status} - ${message}`);
                clearInput();
                onLoginSuccess();
            }
        } catch (error) {
            showUniqueToast("Chyba v přihlášení nebo hesle!", false);
        }
    };

    const renderField = (name, type, placeholder) => (
        <label>
            <p>{placeholder}</p>
            <input
                onChange={(e) => handleChange(name, e.target.value)}
                type={type}
                name={name}
                value={formData[name].value}
                placeholder={placeholder}
                autoComplete={type === "password" ? "current-password" : "on"}
            />
        </label>
    );

    return (
        <section className="Auth-section" style={{ display: "flex" }}>
            <p className="Form-title">AMN</p>
            <form
                onSubmit={handleSubmit}
                autoComplete="on"
                className="Login-form">
                <ul>
                    <li>{renderField("email", "text", "Emeil")}</li>
                    <li>
                        <ul>
                            <li>
                                {renderField("password", "password", "Heslo")}
                            </li>
                            <li className="Form-buttons">
                                <button type="submit">
                                    <span>Přihlásit se</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </form>
        </section>
    );
};
