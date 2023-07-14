import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { useEffect } from "react";
import { checkAuth } from "app/models";

const AppAuthRouter = () => {
  const { isLogged } = useTypedSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) { // при каждой перезагрузке происходит проверка токена, если он есть - рефрешим его
      dispatch(checkAuth());
    }
  }, []);
  return (
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
  );
};

export default AppAuthRouter;
