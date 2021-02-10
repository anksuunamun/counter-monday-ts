import React, {useState} from 'react';

import './App.css';
import Counter from './Counter/Counter';
import CounterSettings from './CounterSettings/CounterSettings';


function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    const onMaxChangeHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }
    const onStartChangeHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
    }

    return (
        <div className="App">
            <Counter counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     maxValue={maxValue}
                     startValue={startValue}
            />
            <CounterSettings counterValue={counterValue}
                             setCounterValue={setCounterValue}
                             maxValue={maxValue}
                             startValue={startValue}
                             onMaxChangeHandler={onMaxChangeHandler}
                             onStartChangeHandler={onStartChangeHandler}/>
        </div>
    );
}

export default App;
