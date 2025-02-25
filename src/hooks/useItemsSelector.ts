import { useAppSelector } from './redux-hooks'

export const useItemsSelector = () => {
  const cartItems = useAppSelector((state) => state.cart.items)
  return { cartItems }
}
