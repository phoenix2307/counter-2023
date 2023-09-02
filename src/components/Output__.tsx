import {Button} from "./Button";
import {useState} from "react";

type Output__PropsType = {
    callbackOutput: () => void
    startNumber: number
    finishNumber: number
}


export const Output__ = (props: Output__PropsType) => {

    const [currentNumber, setCurrentNumber] = useState(props.startNumber)

    const increment = () => {
        let newNumber = currentNumber + 1
        if (props.finishNumber > currentNumber){
            setCurrentNumber(newNumber)
        }
    }
    const toggleSetting = () => {
        props.callbackOutput()
    }
    const styleNumber = props.finishNumber === currentNumber ? 'stopCount' : 'number'

    return (
        <div className="container">
            <div className="monitor-output">
                <p className={styleNumber}>
                    {currentNumber}</p>
            </div>
            <div className="buttons">
                <Button className={'increment'} value={'inc'} callback={increment}/>
                <Button className={'set'} value={'set'} callback={toggleSetting}/>
            </div>


        </div>

    )
}