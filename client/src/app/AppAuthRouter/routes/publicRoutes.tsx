import { IRoute } from "./routeType";
import { Navigate } from "react-router-dom";
import { Registration } from "pages/Registration";
import { Login } from "pages/Login";
import { NotFound } from "pages/NotFound";

export const publicRoutes: IRoute[] = [
  {path: "/", element: <Navigate to="/login" replace={true} />},
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "*", element: <NotFound/> },
];
