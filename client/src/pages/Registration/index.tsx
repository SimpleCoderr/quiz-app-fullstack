import { RegistrationForm } from "features/RegistrationForm"
import s from './styles.module.scss'

export const Registration = () => {
  return (
    <div className={s.registrationPage}>
        <RegistrationForm/>
    </div>
  )
}
