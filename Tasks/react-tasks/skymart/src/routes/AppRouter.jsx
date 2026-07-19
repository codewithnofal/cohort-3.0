import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
