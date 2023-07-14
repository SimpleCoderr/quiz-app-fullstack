import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { useEffect } from "react";
import { checkAuth } from "app/models";

const AppRouter = () => {
  const { isLogged } = useTypedSelector((state) => state.app);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])
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
