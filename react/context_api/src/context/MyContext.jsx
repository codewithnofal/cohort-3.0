import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [users, setusers] = useState({
    name: "nofal",
    email: "nfachhot@gmail.com",
    pass: 12121212,
  });
  return <MyStore.Provider value={{users}}>{children}</MyStore.Provider>;
};
