import React from "react";
import { Outlet } from "react-router";

const AuthProtected = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProtected;
