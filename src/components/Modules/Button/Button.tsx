import styles from './styles.module.css'
import { FC } from 'react'

type TButton = {
  text: string
  onClick: () => void
}

export const Button: FC<TButton> = ({ text, onClick }) => {
  return (
    <button className={styles.button} type='submit' onClick={onClick}>
      {text}
    </button>
  )
}
