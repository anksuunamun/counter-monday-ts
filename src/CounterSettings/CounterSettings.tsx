import React, {useState} from 'react';
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
}

function CounterSettings(props: CounterSettingsPropsType) {
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [isSetMode, setIsSetMode] = useState<boolean>(false)

    const onSetClickHandler = () => {
        props.onMaxChangeHandler(maxValue)
        props.onStartChangeHandler(startValue)
        setIsSetMode(false)
    }
    const onInputClickHandler = () => {
        setIsSetMode(true)
    }

    return (
        <div className={styles.counter}>
            <Display counterValue={props.counterValue}
                     isSetMode={isSetMode}
                     maxValue={maxValue}
                     startValue={startValue}
                     setMaxValue={setMaxValue}
                     setStartValue={setStartValue}
                     onInputClickHandler={onInputClickHandler}
                     isSetModeDisplay={true}
            />
            <div className={styles.buttonWrapper}>
                <Button title={'set'}
                        counterValue={props.counterValue}
                        setCounterValue={props.setCounterValue}
                        disabled={!isSetMode}
                        onClickHandler={onSetClickHandler}/>
            </div>

        </div>
    );
};

export default CounterSettings;