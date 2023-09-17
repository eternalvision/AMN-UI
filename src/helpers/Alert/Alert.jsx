import { useState, useEffect } from "react";
import { BiCheckCircle, BiCode } from "react-icons/bi";

export const Alert = (props, { message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    const statusKey = props.type === "Asmis" ? "status" : "code";
    const statusValue = props.data[statusKey];

    if (statusValue === 200) {
        return (
            <ul>
                <li
                    className="Status"
                    style={{
                        backgroundColor: "green",
                        boxShadow: "0 0 30px 0 #32a5329d",
                    }}>
                    <section className="AlertSection">
                        <ul>
                            <li>
                                <BiCheckCircle />
                                <span>
                                    {props.data.statusText || props.data.status}
                                </span>
                            </li>
                            <li>
                                <BiCode /> <span>{statusValue}</span>
                            </li>
                        </ul>
                    </section>
                </li>
            </ul>
        );
    } else if (props.type === "Asmis" && statusValue === 429) {
        return (
            <ul>
                <li className="Status" style={{ backgroundColor: "red" }}>
                    <section className="AlertSection">{message}</section>
                </li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li className="Status" style={{ backgroundColor: "red" }}>
                    <section className="AlertSection">{message}</section>
                </li>
            </ul>
        );
    }
};
