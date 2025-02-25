import { useItemsSelector } from 'src/hooks/useItemsSelector'
import { CartItem } from './CartItems/CartItems'
import i18nCart from './ru'
import styles from './styles.module.css'

export function CartPage() {
  const { cartItems } = useItemsSelector()
  return (
    <div className={styles.cont}>
      <h1>{i18nCart.t('name')}</h1>
      <div>
        {cartItems.length === 0 ? <p>{i18nCart.t('basket')}</p> : <CartItem />}
      </div>
    </div>
  )
}
