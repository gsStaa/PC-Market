import { FC, useState } from 'react'
import styles from './styles.module.css'
import { useValidateForm } from 'src/components/Pages/AccountPage/FormUser/useValidateForm'

interface FormProps {
  title: string
  handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const { emailError, passError, validateEmail, validatePass } =
    useValidateForm()
  const handleAddress = () => {
    const isEmailValid = validateEmail(email)
    const isPassValid = validatePass(pass)
    if (isEmailValid && isPassValid) {
      handleClick(email, pass)
    }
  }
  return (
    <div className={styles.formUser}>
      <input
        className={styles.questionInput}
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <div className={styles.error}>{emailError}</div>
      <input
        className={styles.questionInput}
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <div className={styles.error}>{passError}</div>
      <button onClick={handleAddress} className={styles.button}>
        {title}
      </button>
    </div>
  )
}
export { Form }
