import { useEffect, useState } from "react";

export const Users = ({
    deleteUser,
    getAllUsers,
    LanguageSets,
    selectedLang,
}) => {
    const [users, setUsers] = useState([]);

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

    const Values =
        LanguageSets.UsersElements &&
        LanguageSets.UsersElements()[selectedLang][0];

    const { textTitle, deleteText } = Values || {};

    if (users.data)
        return (
            <div>
                <h2>{textTitle}</h2>
                <ul className="User-list">
                    {users.data.map(
                        ({
                            workerId,
                            name,
                            surname,
                            username,
                            profileType,
                            linkToPhoto,
                        }) => (
                            <li key={workerId} className="User-list__items">
                                <ul>
                                    <li>
                                        <img
                                            src={linkToPhoto}
                                            alt={username}
                                            width={50}
                                            height={50}
                                        />
                                        {name} {surname} | {username} |{" "}
                                        {profileType}
                                    </li>
                                    <li>
                                        <button
                                            onClick={() =>
                                                handleDeleteUser(workerId)
                                            }>
                                            {deleteText}
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        )
                    )}
                </ul>
            </div>
        );
};
