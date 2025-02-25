import { useNavigate } from 'react-router-dom'
import { useLogout, useAuth } from '../../../../hooks/use-auth'
import { Button } from '../../../Modules/Button/Button'
import { Trans18 } from '../../../Modules/Translation/Translation'
import i18nUser from './ru'
import styles from './styles.module.css'

export function AccountUser() {
  const navigate = useNavigate()
  const { email } = useAuth()
  const handleLogout = useLogout()
  return (
    <Trans18 i18n={i18nUser}>
      <div className={styles.cont}>
        <h3>{i18nUser.t('h')}</h3>
        <p>
          {i18nUser.t('userName')} {email}
        </p>
        <div className={styles.button}>
          <Button onClick={handleLogout} text='Выйти'></Button>
          <Button
            onClick={() => navigate('/CartPage')}
            text='В корзину'
          ></Button>
        </div>
      </div>
    </Trans18>
  )
}
