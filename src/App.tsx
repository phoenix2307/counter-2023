import React, {useState} from 'react';
import './App.css';
import {Output} from "./components/Output";
import {Set} from "./components/Set";

function App() {
    const [windowType, setWindowType] = useState(true)
    const toggleWindow = () => {
        setWindowType(!windowType)
    }

    const [actualMin, setActualMin] = useState(0)
    const [actualMax, setActualMax] = useState(5)
    const setActualNumber = (min: number, max: number) => {
        setActualMin(min)
        setActualMax(max)
        setWindowType(!windowType)
    }


    return (
        <div className="App">
            {
                windowType
                    ?
                    <Set callbackSet={setActualNumber}/>
                    : <Output
                        callbackOutput={toggleWindow}
                        startNumber={actualMin}
                        finishNumber={actualMax}/>
            }
        </div>
    );
}

export default App;
