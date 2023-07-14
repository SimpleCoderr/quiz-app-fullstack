import { Link } from "react-router-dom"
import s from "./MyLink.module.scss"

type MyLinkProps = {
    to: string,
    children: string
}

export const MyLink = ({to, children}: MyLinkProps) => {
  return (
    <Link to={to} className={s.link}>
        {children}
    </Link>
  )
}
