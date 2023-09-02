import {Button} from "./Button";
import {useState} from "react";

type OutputPropsType = {
    callbackOutput: () => void
    startNumber: number
    finishNumber: number
}


export const Output = (props: OutputPropsType) => {


    const [currentNumber, setCurrentNumber] = useState(props.startNumber)

    const increment = () => {
        let newNumber = currentNumber + 1
        if (props.finishNumber > currentNumber) {
            setCurrentNumber(newNumber)
        }
    }

    const reset = () => {
        setCurrentNumber(props.startNumber)
    }
    const toggleSetting = () => {
        props.callbackOutput()
    }
    const styleNumber = props.finishNumber === currentNumber ? 'stopCount' : 'number'
    const btnDis = props.finishNumber === currentNumber ? true : false

    return (
        <div className="container">
            <div className="monitor-output">
                <p className={styleNumber}>
                    {currentNumber}</p>
            </div>
            <div className="buttons">
                <Button className={'increment'} value={'inc'} callback={increment}
                disable={btnDis}/>
                <Button className={'increment'} value={'res'} callback={reset}
                disable={!btnDis}/>
                <Button className={'set'} value={'set'} callback={toggleSetting}/>
            </div>


        </div>

    )
}