import { Link, useLocation } from "react-router-dom";
import shortUUID from "short-uuid";

export const Menu = ({
    GetLogo,
    LanguageSets,
    selectedLang,
    userData,
    activeNoneClass,
}) => {
    const location = useLocation();

    const Values = LanguageSets.MenuInterfaceButtons({
        Username: userData.username,
    })[selectedLang];

    return (
        <section className="Layout-left">
            <ul>
                {Values.map(({ text, linkTo, image }) => {
                    return (
                        <li
                            key={shortUUID.generate()}
                            className={
                                location.pathname === linkTo
                                    ? "activeList"
                                    : "inactive"
                            }>
                            <Link to={linkTo}>
                                <GetLogo img={image} />
                                <span
                                    className={
                                        activeNoneClass ? "activeNoneClass" : ""
                                    }>
                                    {text}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
