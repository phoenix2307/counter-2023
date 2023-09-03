import React, {useState, useEffect} from 'react';
import './App.css';
import {Output} from "./components/Output";
import {Set} from "./components/Set";
import {json} from "stream/consumers";

function App() {
    // debugger

    const [windowType, setWindowType] = useState(true)
    const toggleWindow = () => {
        setWindowType(!windowType)
    }

    //

    const [actualMin, setActualMin] = useState(0)
    const [actualMax, setActualMax] = useState(5)

    useEffect( ()=>{
        let saveMinValue = localStorage.getItem('minValue')
        if (saveMinValue) {
            let newMin = JSON.parse(saveMinValue)
            setActualMin(newMin)
        }
        let saveMaxValue = localStorage.getItem('maxValue')
        if (saveMaxValue){
            let newMax = JSON.parse(saveMaxValue)
            setActualMax(newMax)
        }

    }, [])


    const saveMinToLocalStorage = (min: number) => {
        localStorage.setItem('minValue', JSON.stringify(min))
    }
    const saveMaxToLocalStorage = (max: number) => {
        localStorage.setItem('maxValue', JSON.stringify(max))
    }

    useEffect( ()=>{
        saveMinToLocalStorage(actualMin)
        saveMaxToLocalStorage(actualMax)
    }, [actualMin, actualMax] )

    const setActualNumber = (min: number, max: number) => {
        setActualMin(min)
        setActualMax(max)
        setWindowType(!windowType)
        // saveMinToLocalStorage(min)
        // saveMaxToLocalStorage(max)
    }

    return (
        <div className="App">
            {
                windowType
                    ? <Set callbackSet={setActualNumber}
                           minSetValue={actualMin}
                           maxSetValue={actualMax}
                    />
                    : <Output
                        callbackOutput={toggleWindow}
                        startNumber={actualMin}
                        finishNumber={actualMax}/>
            }
        </div>
    );
}

export default App;
