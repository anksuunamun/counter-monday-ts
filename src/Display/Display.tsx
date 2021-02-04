import React from 'react'
import styles from './Display.module.css'

type DisplayPropsType = {
    counterValue: number
}

function Display(props: DisplayPropsType) {
    return (
        <div className={`${styles.display} ${props.counterValue === 5 ? styles.displayBlocked : ''}`}>
            {props.counterValue}

        </div>
    )
}

export default Display;