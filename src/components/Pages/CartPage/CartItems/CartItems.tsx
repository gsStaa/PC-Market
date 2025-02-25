import { FC } from 'react'
import styles from './styles.module.css'
import { Button } from '../../../Modules/Button/Button'
import { useCartItems } from '../../../../hooks/useCartItems'
import { CartItemOne } from './CartItemOne/CartItemOne'
import i18nCart from 'src/components/Pages/CartPage/ru'

export const CartItem: FC = () => {
  const { totalPrice, handleBuy, isHave } = useCartItems()

  return (
    <div className={styles.cart}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.prod}>{i18nCart.t('product')}</td>
            <td>{i18nCart.t('presence')}</td>
            <td>{i18nCart.t('quantity')}</td>
            <td className={styles.price}>{i18nCart.t('presence')}</td>
          </tr>
        </thead>
        <tbody>
          <CartItemOne />
        </tbody>
        <tfoot>
          <tr>
            <td className={styles.Price}>
              {i18nCart.t('total')} {totalPrice} {i18nCart.t('rub')}
            </td>
          </tr>
        </tfoot>
      </table>
      <Button text={i18nCart.t('buy')} onClick={handleBuy} disabled={isHave} />
    </div>
  )
}
