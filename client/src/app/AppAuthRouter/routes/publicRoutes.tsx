import { IRoute } from "./routeType";
import { Navigate } from "react-router-dom";
import { Registration } from "pages/Registration";
import { Login } from "pages/Login";

export const publicRoutes: IRoute[] = [
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "*", element: <Navigate to="/login" replace={true} /> },
];
