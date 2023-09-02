import {Button__} from "./Button__";
import {useState} from "react";
import {Input__} from "./Input__";

type Set__PropsType = {
    callbackSet: (min: number, max: number) => void
}

export const Set__ = (props: Set__PropsType) => {

    const [minN, setMinN] = useState(0)
    const [maxN, setMaxN] = useState(0)

    const callbackMin = (minValue: number) => {
        setMinN(minValue)
    }
    const callbackMax = (maxValue: number) => {
        setMaxN(maxValue)
    }
    const applySettings = () => {
        props.callbackSet(minN, maxN)
    }

    const styleText = (minN >= maxN) ? 'text-error' : 'text'
    const textMessage = (minN >= maxN) ? 'Enter correct numbers!' : 'Enter numbers and apply changes'

    return (
        <div className="container">
            <div className="monitor-set">
                <p className="title-set">min number:</p>

                <Input__ type={'number'} className={'min'} placeholder={'enter min number'} callback={callbackMin}/>
                <p className="title-set">max number:</p>
                <Input__ type={'number'} className={'max'} placeholder={'enter max number'} callback={callbackMax}/>
                <p className={styleText}>{textMessage}</p>
                {/*<p className="text">Enter numbers and apply changes</p>*/}
                {/*<p className="text-error">Enter correct numbers!</p>*/}
            </div>
            <div className="buttons">
                <Button__ className={'apply'} value={'apply'} callback={applySettings}/>
                {/*<Button__ className={'apply'} value={'apply'} callback={applySettings}/>*/}
            </div>
        </div>
    )
}