import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Login = ({ loginUser, onLoginSuccess }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: {
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
            username: { value: "" },
            password: { value: "" },
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser({
                username: formData.username.value,
                password: formData.password.value,
            });

            if (response && response.data && response.data.token) {
                Cookies.set("userToken", response.data.token, {
                    expires: response.data.expiresToken / (60 * 60 * 24),
                });
                navigate("/");
            }

            clearInput();
            onLoginSuccess();
        } catch (error) {
            console.error(error);
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
                    <li>
                        {renderField("username", "text", "Uživatelské jméno")}
                    </li>
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
