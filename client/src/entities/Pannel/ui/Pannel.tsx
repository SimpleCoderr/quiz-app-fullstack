import { MyButton } from "shared/ui";
import s from "./Pannel.module.scss";

type PannelProps = {
    email: string;
    onLogout: () => void
}

export const Pannel = ({onLogout, email}: PannelProps) => {
  return (
    <div className={s.pannel}>
      <div className={s.email}>{email}</div>
      <MyButton type="primary" onClick={onLogout}>
        Выйти
      </MyButton>
    </div>
  );
};
