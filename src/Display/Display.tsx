import React, {ChangeEvent, useEffect} from 'react'
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
}

function Display(props: DisplayPropsType) {
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.setMaxValue) {
            props.setMaxValue(Number(e.currentTarget.value))
            if (Number(e.currentTarget.value) && (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === props.startValue) || (props.startValue && props.startValue > Number(e.currentTarget.value))) {
                props.setIsSetMode && props.setIsSetMode(false)
                props.setError(true)
            } else {
                props.setIsSetMode && props.setIsSetMode(true)
                props.setError(false)
            }
        }

    }
    const onStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.setStartValue) {
            props.setStartValue(Number(e.currentTarget.value))
            if (Number(e.currentTarget.value) && (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === props.maxValue) || (props.maxValue && props.maxValue < Number(e.currentTarget.value))) {
                props.setIsSetMode && props.setIsSetMode(false)
                props.setError(true)
            } else {
                props.setIsSetMode && props.setIsSetMode(true)
                props.setError(false)
            }
        }


    }
    useEffect(() => {
    }, [props.isSetMode])
    useEffect(() => {
    }, [props.error])

    let styling = props.counterValue === props.maxValue ? styles.displayBlocked : ''
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
            : <div className={`${styles.display} ${styling}`}>
                {props.isSetMode
                    ? (props.error && 'Incorrect value!') || 'enter values and press set'
                    : props.counterValue}
            </div>
    )
}

export default Display;