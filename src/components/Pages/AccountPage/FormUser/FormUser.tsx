import { FC, useState } from 'react'
import styles from './styles.module.css'

interface FormProps {
  title: string
  handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div className={styles.FormUser}>
      <input
        className={styles.questionInput}
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        className={styles.questionInput}
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <button
        onClick={() => handleClick(email, pass)}
        className={styles.Button}
      >
        {title}
      </button>
    </div>
  )
}
export { Form }
