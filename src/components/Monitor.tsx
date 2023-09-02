import {Input} from "./Input";
import {useState} from "react";

// Перекинути стейти мінімальних максимальних значень нагору і там
// по кнопці apply робити порівння і передавати в монітор пропсом

type MonitorPropsType = {
    className: string // клас монітора
    text?: string // текст внизу екрана
    classNameText?: string // стилізація тексту
}

export const Monitor = (props: MonitorPropsType) => {
    const [minInput, setMinInput] = useState(0)
    const [maxInput, setMaxInput] = useState(0)
    const [textMessage, setTextMessage] = useState('Enter numbers and apply changes')

    // minInput>=maxInput
    // ? setTextMessage('Enter correct numbers!')
    //     : setTextMessage('Enter numbers and apply changes')

    return (

        <div className={props.className}>
            <p className="title-set">min number:</p>
            <Input type={'number'}
                   className={'min'}
                   placeholder={'enter min number'}
                   callback={(value) => setMinInput(value)}
            />
            <p className="title-set">max number:</p>
            <Input type={'number'}
                   className={'max'}
                   placeholder={'enter max number'}
                   callback={(value) => setMaxInput(value)}
            />
            <p className={props.classNameText}>{props.text}</p>
            {/*<p className="text">Enter numbers and apply changes</p>*/}
            {/*<p className="text-error">Enter correct numbers!</p>*/}
        </div>
    )
}