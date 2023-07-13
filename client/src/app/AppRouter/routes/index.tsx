import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTypedSelector } from "shared/model";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRouter = () => {
  const { isLogged } = useTypedSelector((state) => state.app);
  return (
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <>
            {privateRoutes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </>
        ) : (
          <>
            {publicRoutes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
