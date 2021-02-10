import React from 'react'
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    counterValue: number
    setCounterValue: (value: number) => void
    disabled: boolean
    onClickHandler: () => void
}

function Button(props: ButtonPropsType) {
    return (
        <div onClick={props.onClickHandler}
             className={`${styles.button} ${props.disabled ? styles.buttonDisabled : ''}`}>
            {props.title}
        </div>
    )
}


export default Button;