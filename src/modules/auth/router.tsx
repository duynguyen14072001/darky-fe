import type { RouteObject } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export const AuthRoute: RouteObject = {
  path: "",
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};
