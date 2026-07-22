import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <AppRouter />
    </div>
  );
};

export default App;
