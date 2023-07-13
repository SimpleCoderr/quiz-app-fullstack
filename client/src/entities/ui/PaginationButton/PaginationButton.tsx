import { MyButton } from "shared/ui";

type PaginationButtonProps = {
  children: string;
  disabled: boolean;
  onClick: () => void;
};

export const PaginationButton = ({
  children,
  ...rest
}: PaginationButtonProps) => {
  return (
    <MyButton {...rest} type="primary">
      {children}
    </MyButton>
  );
};
