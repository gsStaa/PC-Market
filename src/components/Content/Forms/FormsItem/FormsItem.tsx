import styles from './FormsItem.module.css'
import cn from 'classnames'
import { FC } from 'react'
// inputStyle: question | feedback | undefined

type TFormsItem = {
    FormsText: string;
    FormsInputText:string;
    inputStyle:string;
    containerClassName: string;
}

export const FormsItem: FC<TFormsItem> = ({FormsText, FormsInputText, inputStyle, containerClassName}) => {
    return(
        <div className={cn(styles.container, containerClassName)}>
            <label>{FormsText}</label>
            <input className={styles[`${inputStyle ?? 'question'}Input`] } placeholder={FormsInputText}></input>
        </div>
    )
}
