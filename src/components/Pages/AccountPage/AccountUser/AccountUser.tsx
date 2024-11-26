import { useLogout, useAuth } from '../../../../hooks/use-auth'

export function AccountUser() {
  const { email } = useAuth()
  const handleLogout = useLogout()
  return (
    <div>
      <h3>Добро пожаловать!</h3>
      <p>
        Теперь вы можете совершать покупки в нашем магазине, а так же выйти из
        аккаунта {email}{' '}
      </p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}
