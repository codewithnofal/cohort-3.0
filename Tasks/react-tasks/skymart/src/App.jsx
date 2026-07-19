import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div className=" h-screen w-full">
      <AppRouter />
    </div>
  );
};

export default App;
