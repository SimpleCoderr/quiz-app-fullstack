import { Button } from "antd";

type MyButtonProps = {
  children: string;
  onClick: () => void;
  type: "primary" | "link";
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
};

export const MyButton = ({ children, ...rest }: MyButtonProps) => {
  return (
    <Button {...rest} size="middle">
      {children}
    </Button>
  );
};
