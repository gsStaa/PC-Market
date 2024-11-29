import { usePushCart } from '../../../hooks/pushCart'
import { CartItem } from './CartItems/CartItems'
import styles from './styles.module.css'

export function CartPage() {
  // usePushCart()
  return (
    <div className={styles.cont}>
      <h1>Корзина</h1>
      <div>
        <CartItem></CartItem>
      </div>
    </div>
  )
}
