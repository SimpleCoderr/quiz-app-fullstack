import { Button, Form, Input } from "antd";
import { useAppDispatch, useTypedSelector } from "shared/model";
import { MyForm } from "shared/ui";
import { login } from "../model/AsyncActions/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: { email: string; password: string }) => {
    dispatch(login(values.email, values.password));
  };
  const {isLogged} = useTypedSelector(state => state.app)
  const navigate = useNavigate()

  useEffect(() => {
    if(isLogged) {
      navigate("/quiz")
    }
  }, [isLogged])

  return (
    <MyForm name="login" onFinish={onFinish} title="вход">
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
