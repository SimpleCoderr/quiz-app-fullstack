import { Input } from "antd"

type MyInputProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}


export const MyInput = ({type, ...rest}: MyInputProps) => {
  if (type === 'password') {
    return <Input.Password {...rest}/>
  }
  return (
    <Input {...rest}/>
  )
}
