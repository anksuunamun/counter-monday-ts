import React, {useEffect, useState} from 'react';
import styles from './CounterWithSettings.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';


type CounterWithSettingsPropsType = {
    counterValue: number
    setCounterValue: (value: number) => void
    maxValue: number
    startValue: number
    onStartChangeHandler: (value: number) => void
    onMaxChangeHandler: (value: number) => void
    isSetMode: boolean
    setIsSetMode: (value: boolean) => void
    error: boolean
    setError: (value: boolean) => void
    isSetModeDisplay: boolean
    appMode?: 'single' | 'dual'
    setIsSetModeDisplay: (value: boolean) => void
}

function CounterWithSettings(props: CounterWithSettingsPropsType) {
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [startValue, setStartValue] = useState<number>(props.startValue)


    useEffect(() => {
        setStartValue(props.startValue)
        setMaxValue(props.maxValue)
    }, [props.maxValue, props.startValue])

    const onSetInSingleModeHandler = () => {
        if (!props.isSetMode && props.appMode === 'single') {
            props.setIsSetModeDisplay(true);
            props.setIsSetMode(true)
        } else if (props.isSetMode && props.appMode === 'single') {
            onSetClickHandler()
            props.setIsSetModeDisplay(false)
        }
    }

    const onSetClickHandler = () => {
        if (props.isSetMode && !props.error) {
            props.onMaxChangeHandler(maxValue)
            props.onStartChangeHandler(startValue)
            props.setIsSetMode(false)
            props.setCounterValue(startValue)
            props.setIsSetModeDisplay(false)
        }
    }
    const onInputClickHandler = () => {
        if (props.maxValue !== props.startValue) {
            props.setIsSetMode(true)
        }
    }
    const onIncorrectInputHandler = () => {
        props.setIsSetMode(false)
    }
    const onMaxChangeHandler = (maxValue: number) => {
        if ((maxValue < 0 || maxValue === startValue) || (startValue > maxValue)) {
            props.setIsSetMode && props.setIsSetMode(false)
            props.setError(true)
        } else {
            props.setIsSetMode && props.setIsSetMode(true)
            props.setError(false)
        }
        setMaxValue(maxValue)
    }
    const onStartChangeHandler = (startValue: number) => {
        if ((startValue < 0 || startValue === maxValue) || (maxValue < startValue)) {
            props.setIsSetMode && props.setIsSetMode(false)
            props.setError(true)
        } else {
            props.setIsSetMode && props.setIsSetMode(true)
            props.setError(false)
        }
        setStartValue(startValue)
    }
    const onIncClickHandler = () => {
        if (props.counterValue < props.maxValue) {
            props.setCounterValue(props.counterValue + 1)
        }
    }
    const onResetClickHandler = () => {
        props.setCounterValue(props.startValue)
    }

    return (
        <div className={styles.counter}>
            <Display counterValue={props.counterValue}
                     isSetMode={props.isSetMode}
                     maxValue={maxValue}
                     startValue={startValue}
                     setMaxValue={setMaxValue}
                     setStartValue={setStartValue}
                     onInputClickHandler={onInputClickHandler}
                     isSetModeDisplay={props.appMode === 'single'
                         ? props.isSetModeDisplay
                         : props.isSetModeDisplay}
                     setIsSetModeDisplay={props.setIsSetModeDisplay}
                     onIncorrectInputHandler={onIncorrectInputHandler}
                     setIsSetMode={props.setIsSetMode}
                     error={props.error}
                     setError={props.setError}
                     onMaxChangeHandler={onMaxChangeHandler}
                     onStartChangeHandler={onStartChangeHandler}
                     maxValueForDisplay={props.maxValue}
            />
            <div className={styles.buttonWrapper}>
                {props.isSetModeDisplay
                    ? <Button title={'set'}
                              disabled={!props.isSetMode || props.error}
                              onClickHandler={onSetClickHandler}/>
                    : <>
                        <Button title={'inc'}
                                disabled={props.counterValue === props.maxValue || props.error || props.isSetModeDisplay}
                                onClickHandler={onIncClickHandler}/>
                        <Button title={'reset'}
                                disabled={props.counterValue === props.startValue || props.error || props.isSetModeDisplay}
                                onClickHandler={onResetClickHandler}/>
                        {props.appMode === 'single'
                            ? <Button title={'set'}
                                      disabled={!(props.appMode === 'single') || props.error}
                                      onClickHandler={onSetInSingleModeHandler}/>
                            : ''}
                    </>
                }
            </div>

        </div>
    );
}

export default CounterWithSettings;