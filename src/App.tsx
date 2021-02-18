import React, {useEffect, useState} from 'react';
import './App.css';
import CounterWithSettings from './CounterSettings/CounterWithSettings';
import Button from './Button/Button';


function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [isSetMode, setIsSetMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [appMode, setAppMode] = useState<'single' | 'dual'>('dual')
    const [isSetModeDisplay, setIsSetModeDisplay] = useState<boolean>(false)

    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue')
        newMaxValue && setMaxValue(JSON.parse(newMaxValue))
        let newStartValue = localStorage.getItem('startValue')
        newStartValue && setStartValue(JSON.parse(newStartValue))
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', maxValue.toString())
        localStorage.setItem('startValue', startValue.toString())
    }, [startValue, maxValue])

    useEffect(() => {
        setCounterValue(startValue)
    }, [startValue])

    const onMaxChangeHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }
    const onStartChangeHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
    }
    const onSingleModeToggle = () => {
        setAppMode('single');
        setIsSetModeDisplay(false)
    }
    const onDualModeToggle = () => {
        setAppMode('dual');
    }

    let announcement =
        `If you want to switch on ${appMode === 'dual'
            ? 'single display'
            : 'dual display\'s'} mode, press '${appMode === 'dual'
            ? 'single'
            : 'dual'}'`

    return (
        <div className={`App ${appMode === 'single' ? 'singleMode' : 'dualMode'}`}>
            <div className={'announcement'}>
                <p>{announcement}</p>
                {appMode === 'dual'
                    ? <Button title={'single'} disabled={false} onClickHandler={onSingleModeToggle}/>
                    : <Button title={'dual'} disabled={false} onClickHandler={onDualModeToggle}/>}
            </div>
            <div className={'counterWrapper'}>
                {appMode === 'dual'
                    ? <>
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
                                             setIsSetModeDisplay={setIsSetModeDisplay}
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
                                             setIsSetModeDisplay={setIsSetModeDisplay}
                        />
                    </>
                    : <CounterWithSettings counterValue={counterValue}
                                           setCounterValue={setCounterValue}
                                           maxValue={maxValue}
                                           startValue={startValue}
                                           onMaxChangeHandler={onMaxChangeHandler}
                                           onStartChangeHandler={onStartChangeHandler}
                                           isSetMode={isSetMode}
                                           setIsSetMode={setIsSetMode}
                                           error={error}
                                           setError={setError}
                                           isSetModeDisplay={isSetModeDisplay}
                                           appMode={appMode}
                                           setIsSetModeDisplay={setIsSetModeDisplay}

                    />
                }
            </div>
        </div>
    );
}

export default App;
