import { Button, Form, Input } from "antd";
import { MyForm } from "shared";

export const LoginForm = () => {
  const onFinish = (values: { email: string; password: string }) => {
    // console.log(values);
  };

  return (
    <MyForm name="registration" onFinish={onFinish} title="вход">
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </MyForm>
  );
};