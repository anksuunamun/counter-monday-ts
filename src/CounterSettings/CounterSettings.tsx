import React, {useEffect, useState} from 'react';
import styles from './CounterSettings.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';


type CounterSettingsPropsType = {
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
}

function CounterSettings(props: CounterSettingsPropsType) {
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [startValue, setStartValue] = useState<number>(props.startValue)

    useEffect(() => {
    }, [props.isSetMode])

    const onSetClickHandler = () => {
        if (props.isSetMode && !props.error) {
            props.onMaxChangeHandler(maxValue)
            props.onStartChangeHandler(startValue)
            props.setIsSetMode(false)
            props.setCounterValue(startValue)
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

    return (
        <div className={styles.counter}>
            <Display counterValue={props.counterValue}
                     isSetMode={props.isSetMode}
                     maxValue={maxValue}
                     startValue={startValue}
                     setMaxValue={setMaxValue}
                     setStartValue={setStartValue}
                     onInputClickHandler={onInputClickHandler}
                     isSetModeDisplay={true}
                     onIncorrectInputHandler={onIncorrectInputHandler}
                     setIsSetMode={props.setIsSetMode}
                     error={props.error}
                     setError={props.setError}
                     onMaxChangeHandler={onMaxChangeHandler}
                     onStartChangeHandler={onStartChangeHandler}
            />
            <div className={styles.buttonWrapper}>
                <Button title={'set'}
                        counterValue={props.counterValue}
                        setCounterValue={props.setCounterValue}
                        disabled={!props.isSetMode || props.error}
                        onClickHandler={onSetClickHandler}/>
            </div>

        </div>
    );
}

export default CounterSettings;