import { LoginPage } from './LoginPage/LoginPage'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { RegisterPage } from './RegisterPage/RegisterPage'
import { useState } from 'react'

export function AccountPage() {
  const [Login, setLogin] = useState(true)
  const clickRegister = () => {
    setLogin((Login) => !Login)
  }
  return (
    <div className={styles.accountCont}>
      <div className={styles.accountForm}>
        {Login ? <LoginPage /> : <RegisterPage />}
        <Link to='#' onClick={clickRegister}>
          {Login ? 'Зарегистрироваться' : 'Войти'}
        </Link>
      </div>
    </div>
  )
}
