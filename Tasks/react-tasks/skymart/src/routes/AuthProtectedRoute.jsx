import React, { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const AuthProtectedRoute = () => {
  let { currentUser } = useContext(AuthStore);

  if (currentUser) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default AuthProtectedRoute;
