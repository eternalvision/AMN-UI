export const Profile = ({ userData }) => {
    const { name, surname, username, phoneNumber, email, linkToPhoto } =
        userData;
    return (
        <section className="Profile">
            <div>
                <ul>
                    <li>
                        <img
                            width={400}
                            height={400}
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
        </section>
    );
};
