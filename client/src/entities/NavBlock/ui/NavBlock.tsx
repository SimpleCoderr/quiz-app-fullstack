import { MyLink } from "shared/ui/MyLink/MyLink";
import s from "./NavBlock.module.scss";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

export const NavBlock = () => {

  const checkActive = useCallback(({isActive}) => isActive ? s.activeNavLink : s.navLink, [])
  return (
    <nav className={s.nav}>
      <NavLink
        to="/login"
        className={checkActive}
      >
        Войти
      </NavLink>
      <NavLink
        to="/registration"
        className={checkActive}
      >
        Регистрация
      </NavLink>
    </nav>
  );
};
