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
    onIncorrectInputHandler?: () => void
    setIsSetMode?: (value: boolean) => void
    error: boolean
    setError: (value: boolean) => void
    onMaxChangeHandler?: (value: number) => void
    onStartChangeHandler?: (value: number) => void
    maxValueForDisplay: number
    setIsSetModeDisplay?: (value: boolean) => void
}

function Display(props: DisplayPropsType) {
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onMaxChangeHandler && props.onMaxChangeHandler(Number(e.currentTarget.value))
    }
    const onStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onStartChangeHandler && props.onStartChangeHandler(Number(e.currentTarget.value))
    }

    let styling = props.counterValue === props.maxValueForDisplay ? styles.displayBlocked : ''
    // let styleForDiv =

    return (
        props.isSetModeDisplay
            ? <div className={`${styles.display} ${styles.settingDisplay}`}>
                <div>max value: <input type={'number'}
                                       value={props.maxValue}
                                       onChange={onMaxChangeHandler}
                                       onClick={props.onInputClickHandler}
                                       className={props.error
                                           ? styles.inputBlocked
                                           : ''}/>
                </div>
                <div>start value: <input type={'number'}
                                         value={props.startValue}
                                         onChange={onStartChangeHandler}
                                         onClick={props.onInputClickHandler}
                                         className={props.error
                                             ? styles.inputBlocked
                                             : ''}/>
                </div>
            </div>
            : <div
                className={`${styles.display} ${styling} ${props.isSetMode && styles.displayText} ${props.error ? styles.displayBlocked : ''}`}>
                {props.isSetMode
                    ? (props.error && 'Incorrect value!') || 'Enter values and press \'set\' '
                    : props.counterValue}
            </div>
    )
}

export default Display;