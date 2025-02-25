import { FC } from 'react'
import styles from './styles.module.css'
import { useCommodity } from '../../../../../hooks/useCommodity'
import i18nCart from 'src/components/Pages/CartPage/ru'

export const CartItemOne: FC = () => {
  const { cartItems, incSum, decSum, deleteCart } = useCommodity()
  return (
    <>
      {cartItems.map((item) => (
        <tr>
          <td className={styles.img}>
            <img src={item.src} width='120px' />
          </td>
          <td>{item.label}</td>
          <td>
            {item.quantity > 0 ? (
              item.quantity
            ) : (
              <p style={{ color: 'red' }}>{i18nCart.t('absence')}</p>
            )}
          </td>
          <td className={styles.quantityTd}>
            <button
              className={styles.buttonSum}
              onClick={() => decSum(item.id)}
            >
              -
            </button>
            <div className={styles.sumItem}>
              {item.quantity > 0 ? item.sum : 0}
            </div>
            <button
              className={styles.buttonSum}
              onClick={() => incSum(item.id)}
            >
              +
            </button>
          </td>
          <td>
            {item.price}
            <button
              className={styles.buttonDelete}
              onClick={() => {
                deleteCart(item.id)
              }}
            >
              <img
                className={styles.buttonDelete}
                src='/cartItems/free-icon-delete-14360493.png'
              />
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}
