import React from 'react'
import Display from '../Display/Display';
import Button from '../Button/Button';
import styles from './Counter.module.css';

type CounterPropsType = {
    counterValue: number
    setCounterValue: (value: number) => void
    startValue: number
    maxValue: number
    isSetMode: boolean
    error: boolean
    setError: (value: boolean) => void
}

function Counter(props: CounterPropsType) {
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
                     maxValue={props.maxValue}
                     startValue={props.startValue}
                     isSetMode={props.isSetMode}
                     error={props.error}
                     setError={props.setError}
            />
            <div className={styles.buttonWrapper}>
                <Button title={'inc'}
                        counterValue={props.counterValue}
                        setCounterValue={props.setCounterValue}
                        disabled={props.counterValue === props.maxValue}
                        onClickHandler={onIncClickHandler}/>
                <Button title={'reset'}
                        counterValue={props.counterValue}
                        setCounterValue={props.setCounterValue}
                        disabled={props.counterValue === props.startValue}
                        onClickHandler={onResetClickHandler}/>
            </div>

        </div>
    )
}

export default Counter;