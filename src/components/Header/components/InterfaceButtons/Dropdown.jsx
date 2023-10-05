import { NavLink } from "react-router-dom";
import shortUUID from "short-uuid";

export const Dropdown = ({ Values, isOpen, GetLogo, logoutUser, userData }) => {
    return isOpen ? (
        <ul>
            {Values.map(({ text, linkTo, image }) => {
                const isProfileLink = linkTo.endsWith(`/${userData.username}`);
                return (
                    <li key={shortUUID.generate()}>
                        <NavLink
                            to={{
                                pathname: linkTo,
                                state: isProfileLink ? userData : undefined,
                            }}
                            onClick={
                                linkTo === "/logout"
                                    ? async () => await logoutUser()
                                    : undefined
                            }>
                            <GetLogo img={image} />
                            <span>{text}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    ) : (
        ""
    );
};
