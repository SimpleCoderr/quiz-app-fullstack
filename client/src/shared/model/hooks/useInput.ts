import { useState } from 'react';

type useInputTypes = {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const useInput = (defaultValue: string) : useInputTypes => {
    const [value, setValue] = useState(defaultValue)
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return {
        value,
        onChange
    }
}