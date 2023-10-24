import { NavLink, useNavigate } from "react-router-dom";
import shortUUID from "short-uuid";

export const Dropdown = ({ Values, isOpen, GetLogo, logoutUser, userData }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <ul>
            {Values.map(({ text, linkTo, image }) => {
                const isProfileLink = linkTo.endsWith(`/${userData.username}`);
                const handleClick = async () => {
                    await logoutUser();
                    navigate("/login");
                };

                return (
                    <li key={shortUUID.generate()}>
                        <NavLink
                            to={{
                                pathname:
                                    linkTo === "/logout" ? "/login" : linkTo,
                                state: isProfileLink ? userData : undefined,
                            }}
                            onClick={linkTo === "/logout" ? handleClick : null}>
                            <GetLogo img={image} />
                            <span>{text}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};
