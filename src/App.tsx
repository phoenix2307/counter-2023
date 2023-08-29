import React, {useState} from 'react';
import './App.css';
import {Output} from "./components/Output";
import {Set} from "./components/Set";

function App() {
    const [output, setOutput] = useState(false)
    return (
        <div className="App">
            {
                output
                    ? <Output/>
                    : <Set/>
            }
            <button onClick={()=>setOutput(!output)}>toggle</button>
        </div>
    );
}

export default App;
