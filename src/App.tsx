import React, {useEffect, useState} from 'react';
import './App.css';
import CounterWithSettings from './CounterSettings/CounterWithSettings';


function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [isSetMode, setIsSetMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue')
        newMaxValue && setMaxValue(JSON.parse(newMaxValue))
        console.log(newMaxValue)
        newMaxValue && console.log(JSON.parse(newMaxValue))
        console.log(maxValue)
        let newStartValue = localStorage.getItem('startValue')
        newStartValue && setStartValue(JSON.parse(newStartValue))
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', maxValue.toString())
        localStorage.setItem('startValue', startValue.toString())
    }, [startValue, maxValue])

    const onMaxChangeHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }
    const onStartChangeHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
    }

    return (
        <div className="App">
            <CounterWithSettings counterValue={counterValue}
                                 setCounterValue={setCounterValue}
                                 maxValue={maxValue}
                                 startValue={startValue}
                                 onMaxChangeHandler={onMaxChangeHandler}
                                 onStartChangeHandler={onStartChangeHandler}
                                 isSetMode={isSetMode}
                                 setIsSetMode={setIsSetMode}
                                 error={error}
                                 setError={setError}
                                 isSetModeDisplay={true}
            />
            <CounterWithSettings counterValue={counterValue}
                                 setCounterValue={setCounterValue}
                                 maxValue={maxValue}
                                 startValue={startValue}
                                 onMaxChangeHandler={onMaxChangeHandler}
                                 onStartChangeHandler={onStartChangeHandler}
                                 isSetMode={isSetMode}
                                 setIsSetMode={setIsSetMode}
                                 error={error}
                                 setError={setError}
                                 isSetModeDisplay={false}
            />
        </div>
    );
}

export default App;
