import {
  decrementSum,
  incrementSum,
  removeCart,
} from '../App/features/cartSlice/cartSlice'
import { useAppDispatch } from './redux-hooks'
import { useItemsSelector } from 'src/hooks/useItemsSelector'

export const useCommodity = () => {
  const { cartItems } = useItemsSelector()

  const dispatch = useAppDispatch()

  const incSum = (id: number) => {
    dispatch(incrementSum(id))
  }
  const decSum = (id: number) => {
    dispatch(decrementSum(id))
  }
  const deleteCart = (id: number) => {
    dispatch(removeCart(id))
  }
  return { cartItems, incSum, decSum, deleteCart }
}
