import { Checkbox } from "antd";

type MyCheckboxProps = {
  children: string;
  value: number;
  style?: React.CSSProperties;
  disabled: boolean;
};

export const MyCheckbox = ({ children, ...rest }: MyCheckboxProps) => {
  return <Checkbox {...rest}>{children}</Checkbox>;
};
