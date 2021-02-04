import React from 'react'
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    counterValue: number
    setCounterValue: (value: number) => void
    disabled: boolean
}

function Button(props: ButtonPropsType) {
    function onClickHandler() {
        if (props.title === 'inc') {
            if (props.counterValue < 5) {
                props.setCounterValue(props.counterValue + 1)
            }
        } else if (props.title === 'reset') {
            props.setCounterValue(0)
        }
    }

    return (
        <div onClick={onClickHandler} className={`${styles.button} ${props.disabled ? styles.buttonDisabled : ''}`}>
            {props.title}
        </div>
    )
}


export default Button;