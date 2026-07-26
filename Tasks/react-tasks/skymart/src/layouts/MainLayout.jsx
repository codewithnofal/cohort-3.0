import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen bg-black w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
