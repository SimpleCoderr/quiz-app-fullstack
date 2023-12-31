import { MyButton } from "shared/ui";
import { CheckOutlined } from "@ant-design/icons";

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
