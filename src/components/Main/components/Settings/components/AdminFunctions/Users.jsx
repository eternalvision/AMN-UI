import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = ({
    deleteUser,
    getAllUsers,
    LanguageSets,
    selectedLang,
    GetLogo,
    username,
}) => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    let paramsUsername = username;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await getAllUsers();
                setUsers(allUsers);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, [getAllUsers]);

    const handleDeleteUser = async (workerId) => {
        try {
            await deleteUser(workerId);
            window.location.reload();
            setUsers(users.filter((user) => user.workerId !== workerId));
        } catch (error) {
            console.error(error);
        }
    };

    const Values = LanguageSets.UsersElements()[selectedLang][0];

    const { textTitle, deleteText, deleteIcon, searchText } = Values;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    if (users.data) {
        let filteredUsers = users.data.filter(
            ({ username, profileType, name, surname }) => {
                return (
                    username.toLowerCase().includes(searchTerm) ||
                    profileType.toLowerCase().includes(searchTerm) ||
                    name.toLowerCase().includes(searchTerm) ||
                    surname.toLowerCase().includes(searchTerm)
                );
            }
        );
        const sortedUsers = [...filteredUsers].sort((a, b) => {
            if (a.profileType === "admin" && b.profileType !== "admin") {
                return -1;
            } else if (a.profileType !== "admin" && b.profileType === "admin") {
                return 1;
            } else {
                return 0;
            }
        });
        return (
            <div>
                <h2>{textTitle}</h2>
                <input
                    className="UserSearch"
                    type="text"
                    placeholder={searchText}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <ul className="User-list">
                    {sortedUsers.map(
                        ({
                            workerId,
                            name,
                            surname,
                            username,
                            linkToPhoto,
                            profileType,
                        }) => {
                            return (
                                <li key={workerId} className="User-list__items">
                                    <ul>
                                        <li>
                                            <Link to={`/${username}`}>
                                                <img
                                                    src={linkToPhoto}
                                                    alt={username}
                                                    width={50}
                                                    height={50}
                                                />
                                                {name} {surname}
                                                <br />
                                                {username}
                                                <br />
                                                {profileType}
                                            </Link>
                                        </li>
                                        {username !== paramsUsername ? (
                                            <li style={{ width: "auto" }}>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteUser(
                                                            workerId
                                                        )
                                                    }
                                                    title={deleteText}>
                                                    <GetLogo img={deleteIcon} />
                                                </button>
                                            </li>
                                        ) : (
                                            ""
                                        )}
                                    </ul>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        );
    }
};
