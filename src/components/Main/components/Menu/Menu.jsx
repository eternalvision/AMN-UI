import { useState } from "react";
import { Link } from "react-router-dom";
import shortUUID from "short-uuid";

export const Menu = ({ GetLogo, LanguageSets, selectedLang, username }) => {
    const [activeId, setActiveId] = useState(1);
    const Values = LanguageSets.MenuInterfaceButtons({ username })[
        selectedLang
    ];
    return (
        <section className="Layout-left">
            <ul>
                {Values.map(({ id, text, linkTo, image }) => {
                    return (
                        <li
                            key={shortUUID.generate()}
                            onClick={() => setActiveId(id)}
                            className={
                                activeId === id ? "activeList" : "inactive"
                            }>
                            <Link to={linkTo}>
                                <GetLogo img={image} />
                                <span>{text}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
