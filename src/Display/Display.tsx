import React, {ChangeEvent} from 'react'
import styles from './Display.module.css'

type DisplayPropsType = {
    counterValue?: number
    isSetMode?: boolean
    maxValue?: number
    startValue?: number
    setMaxValue?: (value: number) => void
    setStartValue?: (value: number) => void
    onInputClickHandler?: () => void
    isSetModeDisplay?: boolean
}

function Display(props: DisplayPropsType) {
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.setMaxValue) {
            props.setMaxValue(Number(e.currentTarget.value))
        }
    }
    const onStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.setStartValue) {
            props.setStartValue(Number(e.currentTarget.value))
        }
    }

    let styling = props.counterValue === props.maxValue ? styles.displayBlocked : 'vl'
    return (
        props.isSetModeDisplay
            ? <div className={styles.display}>
                <div>max value: <input type={'number'}
                                       value={props.maxValue}
                                       min={props.startValue}
                                       onChange={onMaxChangeHandler}
                                       onClick={props.onInputClickHandler}/>
                </div>
                <div>start value: <input type={'number'}
                                         min={0}
                                         value={props.startValue}
                                         onChange={onStartChangeHandler}
                                         onClick={props.onInputClickHandler}/></div>
            </div>
            : <div className={`${styles.display} ${styling}`}>
                {props.maxValue===props.startValue? "Incorrect input!": ''}
                {props.counterValue}
            </div>
    )
}

export default Display;