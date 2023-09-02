import {ChangeEvent, useEffect, useState} from "react";

type InputPropsType = {
    type: string
    className: string
    placeholder: string
    callback: (value: number)=> void
}

export const Input__ = (props: InputPropsType) => {
    const [value, setValue] = useState(0)

    // useEffect(()=>{
    //     props.callback(value)
    // },[value])
    //
    // const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setValue(+e.currentTarget.value)
    //     props.callback(value)
    // }
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        props.callback(+e.currentTarget.value)
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
