import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../app/layouts/MainLayout";
import PublicProtected from "./protected/PublicProtected";
import Home from "../shared/ui/pages/Home";
import Shop from "../features/products/ui/pages/Shop";
import Cart from "../features/cart/ui/pages/Cart";
import Orders from "../features/orders/ui/pages/Orders";
import AuthProtected from "./protected/AuthProtected";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import AuthLayout from "../app/layouts/AuthLayout";

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthProtected />,
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
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
