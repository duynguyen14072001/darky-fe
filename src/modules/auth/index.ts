import { RouteObject } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

export const AuthRouter: RouteObject = {
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};
