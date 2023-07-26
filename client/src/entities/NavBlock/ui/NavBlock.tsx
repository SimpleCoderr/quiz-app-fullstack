import { NavLink } from "react-router-dom";
import { useCallback } from "react";
import s from "./NavBlock.module.scss";

export const NavBlock = () => {
  const checkActive = useCallback(
    ({ isActive }) => (isActive ? s.activeNavLink : s.navLink),
    []
  );
  return (
    <nav className={s.nav}>
      <NavLink to="/login" className={checkActive}>
        Войти
      </NavLink>
      <NavLink to="/registration" className={checkActive}>
        Регистрация
      </NavLink>
    </nav>
  );
};
