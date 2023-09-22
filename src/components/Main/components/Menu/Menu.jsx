import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import shortUUID from "short-uuid";

export const Menu = ({ GetLogo, LanguageSets, selectedLang, Username }) => {
    const [activeId, setActiveId] = useState(1);
    const location = useLocation();
    const Values = LanguageSets.MenuInterfaceButtons({ Username })[
        selectedLang
    ];

    useEffect(() => {
        const activeItem = Values.find((item) =>
            location.pathname.includes(item.linkTo)
        );
        console.log(activeItem);
        if (activeItem) setActiveId(activeItem.id);
    }, [location, Values]);

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
