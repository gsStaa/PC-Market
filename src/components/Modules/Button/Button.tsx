import styles from './styles.module.css'
import { FC } from 'react'

type TButton = {
  text: string
}

export const Button: FC<TButton> = ({ text }) => {
  return (
    <button className={styles.button} type='submit'>
      {text}
    </button>
  )
}
