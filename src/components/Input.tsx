import {ChangeEvent, useState} from "react";

type InputPropsType = {
    type: string
    className: string
    placeholder: string
    callback: (value: number)=> void
    startValue: number
}

export const Input = (props: InputPropsType) => {
    // debugger
    const [value, setValue] = useState(props.startValue)
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setValue(newValue)
        props.callback(newValue)
    }

    return (

            <input
                type={props.type}
                className={props.className}
                placeholder={props.placeholder}
                onChange={inputHandler}
                value={value}/>
    )
}


