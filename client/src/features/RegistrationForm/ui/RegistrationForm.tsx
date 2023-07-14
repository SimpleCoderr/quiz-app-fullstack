import { Button, Form, Input } from "antd";
import { MyForm } from "shared/ui";
import { registration } from "../model/asyncActions";
import { useAppDispatch} from "shared/model";

export const RegistrationForm = () => {
  const dispatch = useAppDispatch()
  const onFinish = (values: { email: string; password: string }) => {
    dispatch(registration(values.email, values.password))
  };
  return (
    <MyForm name="registration" onFinish={onFinish} title="регистрация">
      <Form.Item
        label="Введите Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите email!",
          },
          { type: "email", message: "Введен невалидный email" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Введите пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
          { min: 4, message: "Пароль должен содержать более 3 символов" },
          { max: 20, message: "Длина пароля не должна превышать 20 символов" },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли должны совпадать!"));
            },
          }),
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </MyForm>
  );
};
