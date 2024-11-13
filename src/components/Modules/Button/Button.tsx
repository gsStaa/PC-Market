import styles from './Button.module.css'
import { FC } from 'react'

type TButton = {
    children: string;
}

export const Button: FC<TButton> = ({children, ...props}) =>{
    return (
    <button {...props} className={styles.button}>{children}</button>)
}