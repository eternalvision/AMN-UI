import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Profile = ({ getUserByUsername, showUniqueToast }) => {
    const { username } = useParams();
    const [userData, setUserData] = useState({});

    const { name, surname, phoneNumber, email, linkToPhoto } = userData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserByUsername(username);
                showUniqueToast(data.status);
                setUserData(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [username, getUserByUsername, showUniqueToast]);

    return (
        <section className="Profile">
            <div>
                <ul>
                    <li>
                        <img
                            width={350}
                            height={350}
                            src={linkToPhoto}
                            alt={`${name} ${surname}`}
                        />
                    </li>
                    <li className="Email">
                        <a href={`mailto:${email}`}>
                            <span>{email}</span>
                        </a>
                    </li>
                    <li className="PhoneNumber">
                        <a href={`tel:${phoneNumber}`}>
                            <span>{phoneNumber}</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="Name">
                        <h2>
                            {name} {surname}
                        </h2>
                    </li>
                    <li className="Username">
                        <span>{`@${username}`}</span>
                    </li>
                </ul>
            </div>
            {/* {authUsername !== username ? <div>ewewe</div> : ""} */}
        </section>
    );
};
