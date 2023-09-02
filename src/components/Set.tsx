import {Button} from "./Button";
import {Input} from "./Input";
import {useEffect, useState} from "react";

type SetPropsType = {
    callbackSet: (min: number, max: number) => void
}

export const Set = (props: SetPropsType) => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [error, setError] = useState(false)
    // const [disBtn, setDisBtn] = useState(false)



    const applySettings = () => {
        if (min > max || min === max) {
            setError(true)
        } else {
            props.callbackSet(min, max)
        }

    }
    const callbackMin = (min: number) => {
        setMin(min)
        if (min > max || min === max) {
            setError(true)
        } else setError(false)
    }

    const callbackMax = (max: number) => {
        setMax(max)
        if (min > max || min === max) {
            setError(true)
        } else setError(false)
    }

    const styleText = error ? 'text-error' : 'text'
    const textMessage = error ? 'Enter correct numbers!' : 'Enter numbers and apply changes'
    const disBtn = error

    return (
        <div className="container">
            <div className="monitor-set">
                <p className="title-set">min number:</p>
                <Input type={'number'} className={'min'} placeholder={'enter min number'} callback={callbackMin}/>
                <p className="title-set">max number:</p>
                <Input type={'number'} className={'max'} placeholder={'enter max number'} callback={callbackMax}/>
                <p className={styleText}>{textMessage}</p>
                {/*<p className="text">Enter numbers and apply changes</p>*/}
                {/*<p className="text-error">Enter correct numbers!</p>*/}
            </div>
            <div className="buttons">
                <Button className={'apply'}
                        value={'apply'}
                        callback={applySettings}
                        disable={disBtn}
                        />
            </div>
        </div>
    )
}