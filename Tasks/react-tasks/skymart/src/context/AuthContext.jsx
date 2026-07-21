import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("currUser")),
  );
  console.log(currentUser);

  return (
    <AuthStore.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </AuthStore.Provider>
  );
};
