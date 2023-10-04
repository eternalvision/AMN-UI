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
                            linkToPhoto,
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
};
