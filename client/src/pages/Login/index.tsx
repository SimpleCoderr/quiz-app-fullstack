import { LoginForm } from "features/LoginForm"
import s from './styles.module.scss'

export const Login = () => {
  return (
    <div className={s.loginPage}>
        <LoginForm/>
    </div>
  )
}