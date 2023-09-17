import { Link } from "react-router-dom";
import shortUUID from "short-uuid";

export const Dropdown = ({ Values, isOpen, GetLogo }) => {
    return (
        <>
            {isOpen ? (
                <ul>
                    {Values.map(({ text, linkTo, image }) => {
                        return (
                            <li key={shortUUID.generate()}>
                                <Link to={linkTo}>
                                    <GetLogo img={image} />
                                    <span>{text}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                ""
            )}
        </>
    );
};
