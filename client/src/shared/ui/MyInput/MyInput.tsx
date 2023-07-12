import { Input } from "antd"

type MyInputProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}


export const MyInput = (props: MyInputProps) => {
  return (
    <Input {...props}/>
  )
}
