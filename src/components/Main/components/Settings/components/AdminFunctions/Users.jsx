import { useEffect, useState } from "react";

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
            setUsers(users.filter((user) => user.workerId !== workerId));
        } catch (error) {
            console.error(error);
        }
    };

    const Values = LanguageSets.UsersElements()[selectedLang][0];

    const { textTitle, deleteText, deleteIcon } = Values;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    if (users.data) {
        let filteredUsers = users.data.filter((user) => {
            return (
                user.username.toLowerCase().includes(searchTerm) ||
                user.profileType.toLowerCase().includes(searchTerm) ||
                user.name.toLowerCase().includes(searchTerm) ||
                user.surname.toLowerCase().includes(searchTerm)
            );
        });
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
                    placeholder="Search..."
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
                                        </li>
                                        {username !== paramsUsername ? (
                                            <li>
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
