import { useAppDispatch, useTypedSelector } from "shared/model";
import { Pannel } from "entities/Pannel";
import { NavBlock } from "entities/NavBlock";
import { logout } from "../model";
import s from "./Header.module.scss";

export const Header = () => {
  const { isLogged, user } = useTypedSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(); // перезагружаем, чтобы тест оказался с новыми вопросами
  };
  return (
    <header className={s.header}>
      {isLogged ? (
        <Pannel onLogout={handleLogout} email={user.email} />
      ) : (
        <NavBlock />
      )}
    </header>
  );
};
