import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Toaster richColors position="top-right" />
    <AppRouter />
  </AuthContextProvider>,
);
