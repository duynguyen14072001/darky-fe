import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

const router = createBrowserRouter(routes);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
