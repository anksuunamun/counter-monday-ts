import React, {useState} from 'react';

import './App.css';
import Counter from './Counter/Counter';
import CounterSettings from './CounterSettings/CounterSettings';


function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [isSetMode, setIsSetMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

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
                     isSetMode={isSetMode}
                     error={error}
                     setError={setError}
            />
            <CounterSettings counterValue={counterValue}
                             setCounterValue={setCounterValue}
                             maxValue={maxValue}
                             startValue={startValue}
                             onMaxChangeHandler={onMaxChangeHandler}
                             onStartChangeHandler={onStartChangeHandler}
                             isSetMode={isSetMode}
                             setIsSetMode={setIsSetMode}
                             error={error}
                             setError={setError}
            />
        </div>
    );
}

export default App;
