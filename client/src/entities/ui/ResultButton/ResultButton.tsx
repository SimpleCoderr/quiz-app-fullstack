import { MyButton } from "shared";
import { CheckOutlined } from "@ant-design/icons";
import s from "./ResultButton.module.scss"

type ResultButtonProps = {
  onClick: () => void;
};

export const ResultButton = ({ onClick }: ResultButtonProps) => {
  return (
    <MyButton
      style={{ fontSize: "28px" }}
      onClick={onClick}
      type="link"
      icon={<CheckOutlined />}
    >
      Показать результаты
    </MyButton>
  );
};
