import { Form } from 'antd'
import s from './MyForm.module.scss'

type valuesType = {
    email: string;
    password: string;
}

type MyFormProps = {
    children: React.ReactNode;
    name: string;
    onFinish: (values: valuesType) => void
}

export const MyForm = ({children, ...rest}: MyFormProps) => {
  return (
    <Form
    {...rest}
    labelCol={{span:8}}
    wrapperCol={{span:16}}
    style={{maxWidth: 600}}
    className={s.form}
    >
        {children}
    </Form>
  )
}
