import { Spin } from "antd";
import s from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={s.spinner}>
      <Spin size="large" />
    </div>
  );
};
