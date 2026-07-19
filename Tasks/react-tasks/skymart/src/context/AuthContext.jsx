import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <AuthStore.Provider value={{ users, setUsers }}>
      {children}
    </AuthStore.Provider>
  );
};
