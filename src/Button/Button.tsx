import React from 'react'
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClickHandler: () => void
}

function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.onClickHandler}
                disabled={props.disabled}
                className={styles.button}>
            {props.title}
        </button>
    )
}


export default Button;