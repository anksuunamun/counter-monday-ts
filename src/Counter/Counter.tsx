import React, {useState} from 'react'
import Display from '../Display/Display';
import Button from '../Button/Button';
import styles from './Counter.module.css';

type CounterPropsType = {}

function Counter(props: CounterPropsType) {

    const [counterValue, setCounterValue] = useState<number>(0)

    const onIncClickHandler = () => {
        if (counterValue < 5) {
            setCounterValue(counterValue + 1)
        }
    }
    const onResetClickHandler = () => {
        setCounterValue(0)
    }

    return (
        <div className={styles.counter}>
            <Display counterValue={counterValue}/>
            <div className={styles.buttonWrapper}>
                <Button title={'inc'} counterValue={counterValue} setCounterValue={setCounterValue}
                        disabled={counterValue === 5} onClickHandler={onIncClickHandler}/>
                <Button title={'reset'} counterValue={counterValue} setCounterValue={setCounterValue}
                        disabled={counterValue === 0} onClickHandler={onResetClickHandler}/>
            </div>

        </div>
    )
}

export default Counter;