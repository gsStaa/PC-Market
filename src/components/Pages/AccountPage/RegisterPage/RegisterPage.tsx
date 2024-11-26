import styles from './styles.module.css'
import { Form } from '../FormUser/FormUser'
import { useRegister } from '../../../../hooks/use-auth'

export function RegisterPage() {
  const handleRegister = useRegister()
  return <Form title='Зарегестрироваться' handleClick={handleRegister} />
}
