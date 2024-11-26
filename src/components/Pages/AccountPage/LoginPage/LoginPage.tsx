import { Form } from '../FormUser/FormUser'
import styles from './styles.module.css'
import { useLogin } from '../../../../hooks/use-auth'

export function LoginPage() {
  const handleLogin = useLogin()
  return <Form title='Войти' handleClick={handleLogin} />
}
