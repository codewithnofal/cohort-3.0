import React, { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthStore);

  if (!currentUser) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
