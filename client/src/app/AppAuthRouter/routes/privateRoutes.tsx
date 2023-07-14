import { IRoute } from "./routeType";
import { Navigate } from "react-router-dom";
import { Testing } from "pages/Testing";

export const privateRoutes: IRoute[] = [
  { path: "/quiz", element: <Testing /> },
  { path: "*", element: <Navigate replace to="/quiz" /> },
];
