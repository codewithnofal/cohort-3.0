import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
