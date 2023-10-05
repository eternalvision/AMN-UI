import React from "react";

const UserDataContext = React.createContext();

export const UserDataProvider = UserDataContext.Provider;
export const useUserData = () => React.useContext(UserDataContext);
