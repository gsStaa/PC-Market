import { useAppDispatch } from './redux-hooks'
import {
  decrementQuantityComp,
  clearCart,
} from '../App/features/cartSlice/cartSlice'
import { useItemsSelector } from './useItemsSelector'

export const useCartItems = () => {
  const { cartItems } = useItemsSelector()

  const dispatch = useAppDispatch()

  const totalPrice = cartItems.reduce(
    (acc, items) => (acc += items.price * items.sum),
    0
  )

  const handleBuy = () => {
    cartItems.forEach((item) => dispatch(decrementQuantityComp(item.id)))
    dispatch(clearCart())
    alert('Покупка успешно совершена!')
  }

  const isHave = cartItems.some((item) => item.quantity <= 0)

  return { totalPrice, handleBuy, isHave }
}
