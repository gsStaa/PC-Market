import styles from './styles.module.css'
import { FC } from 'react'

type TButton = {
  text: string
  onClick?: () => void
}

export const Button: FC<
  TButton & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  )
}
