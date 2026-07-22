import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AuthProtectedRoute from "./AuthProtectedRoute";
import AllProducts from "../pages/AllProducts";
import AboutUs from "../pages/AboutUs";
import SingleProduct from "../pages/SingleProduct";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "/shop",
              element: <AllProducts />,
            },
            {
              path: "product/:id",
              element: <SingleProduct />,
            },
            {
              path: "/about",
              element: <AboutUs />,
            },
          ],
        },
      ],
    },

    {
      path: "/auth",
      element: <AuthProtectedRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <SignUp />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
