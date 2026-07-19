import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  return (
    <AuthStore.Provider value={{ users, setUsers }}>
      {children}
    </AuthStore.Provider>
  );
};
