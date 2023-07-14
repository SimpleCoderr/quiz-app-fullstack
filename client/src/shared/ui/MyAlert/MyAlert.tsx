import { Alert } from "antd";
import s from "./MyAlert.module.scss";

type MyAlertProps = {
  message: string;
  description: string;
  type: "error" | "info";
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
};

export const MyAlert = ({ ...rest }: MyAlertProps) => {
  return <Alert {...rest} className={s.alert} />;
};
