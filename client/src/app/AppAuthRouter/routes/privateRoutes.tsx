import { IRoute } from "./routeType";
import { Testing } from "pages/Testing";
import { PageNotFound } from "pages/PageNotFound";
import { Navigate } from "react-router-dom";

export const privateRoutes: IRoute[] = [
  { path: "/quiz", element: <Testing /> },
  {path: "/login", element: <Navigate to="/quiz" replace={true} />},
  {path: "/registration", element: <Navigate to="/quiz" replace={true} />},
  { path: "*", element: <PageNotFound/> },
];
