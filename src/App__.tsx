import React, {useState, useEffect} from 'react';
import './App.css';
import {Set__} from "./components/Set__";

function App__() {
    const [startN, setStartN] = useState(0)
    const [finishN, setFinishN] = useState(0)

    // useEffect(() => {
    //     setNumbers(startN, finishN)
    // }, [startN, finishN])


    const setNumbers = (min: number, max: number) => {
        console.log('min = ' + min)
        setStartN(min)
        console.log('max = ' + max)
        setFinishN(max)
    }

    return (
        <div className="App">
            <Set__ callbackSet={setNumbers}/>
            <div style={{backgroundColor: 'white', width: '50px'}}>{startN}</div>
            <div style={{backgroundColor: 'white', width: '50px'}}>{finishN}</div>
        </div>
    );
}

export default App__;
