import React, {useState, useEffect} from 'react';
import './App.css';
import {Set__} from "./components/Set__";
import {Output__} from "./components/Output__";

function App__() {
    const [startN, setStartN] = useState(0)
    const [finishN, setFinishN] = useState(0)
    const [toggle, setToggle] = useState(true)

    // useEffect(() => {
    //     setNumbers(startN, finishN)
    // }, [startN, finishN])


    const setNumbers = (min: number, max: number) => {
        console.log('min = ' + min)
        setStartN(min)
        console.log('max = ' + max)
        setFinishN(max)
        setToggle(!toggle)
    }

    const toggleToSet = () => {
        setToggle(!toggle)
    }


    return (
        <div className="App">
            {
                toggle
                    ? <Output__ callbackOutput={toggleToSet}
                                startNumber={startN}
                                finishNumber={finishN}/>
                    : <Set__ callbackSet={setNumbers}/>
            }
            {/*<Output__ callbackOutput={toggleToSet}*/}
            {/*          startNumber={startN}*/}
            {/*          finishNumber={finishN}/>*/}
            {/*<Set__ callbackSet={setNumbers}/>*/}
        </div>
    );
}

export default App__;
