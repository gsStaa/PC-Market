import { FC } from 'react'
import styles from './styles.module.css'
import { Button } from '../../../Modules/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks'
import { removeCart } from '../../../../App/features/cartSlice/cartSlice'

export const CartItem: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.cart}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td colSpan={2}>Товар</td>
            <td>Наличие</td>
            <td>Количество</td>
            <td colSpan={2}>Цена</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr>
              <td className={styles.img}>
                <img src={item.src} width='120px' />
              </td>
              <td>{item.label}</td>
              <td>{item.quantity}</td>
              <td>{item.sum}</td>
              <td>{item.price}</td>
              <td>
                <Button
                  text='del '
                  onClick={() => dispatch(removeCart(item.id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>ИТОГО:</td>
          </tr>
        </tfoot>
      </table>
      <Button text='Купить' />
    </div>
  )
}
