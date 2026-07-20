import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  console.log(users);
  return (
    <AuthStore.Provider value={{ users, setUsers }}>
      {children}
    </AuthStore.Provider>
  );
};
