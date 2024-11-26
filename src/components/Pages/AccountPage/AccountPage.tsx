import { LoginPage } from './LoginPage/LoginPage'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { RegisterPage } from './RegisterPage/RegisterPage'
import { useState } from 'react'
import { usePushRoute } from '../../../hooks/pushRoute'

export function AccountPage() {
  usePushRoute()
  const [Login, setLogin] = useState(true)
  const clickRegister = () => {
    setLogin((Login) => !Login)
  }
  return (
    <div className={styles.AccountCont}>
      <div className={styles.AccountForm}>
        {Login ? <LoginPage /> : <RegisterPage />}
        <Link to='#' onClick={clickRegister}>
          {Login ? 'Зарегистрироваться' : 'Войти'}
        </Link>
      </div>
    </div>
  )
}
