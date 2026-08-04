import React from "react";
import Navbar from "../../shared/ui/components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen w-full bg-white/45">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
