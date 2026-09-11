import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <authContext.Provider
      value={{ user, setUser, accessToken, setAccessToken }}
    >
      {children}
    </authContext.Provider>
  );
};
