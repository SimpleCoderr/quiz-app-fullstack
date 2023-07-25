import { Form } from "antd";
import s from "./MyForm.module.scss";

type valuesType = {
  email: string;
  password: string;
};

type MyFormProps = {
  children: React.ReactNode;
  name: string;
  title: string;
  onFinish: (values: valuesType) => void;
};

export const MyForm = ({ children, title, ...rest }: MyFormProps) => {
  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>{title}</h2>
      <Form className={s.form} {...rest}>
        {children}
      </Form>
    </div>
  );
};
