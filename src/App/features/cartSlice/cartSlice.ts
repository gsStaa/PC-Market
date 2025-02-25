import { createSlice } from '@reduxjs/toolkit'
import { dataComputers } from '../../../components/Pages/ProductsPage/Computers/data'
import type { TCartItem } from './types'
import { dataAccessories } from 'src/components/Pages/ProductsPage/Accessories/data'

type CartState = {
  items: TCartItem[]
}

const saveLocalStorage = (cart: TCartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const loadLocalStorage = () => {
  const cartData = localStorage.getItem('cart')
  return cartData ? JSON.parse(cartData) : []
}

const deleteLocalStorage = (itemId: number) => {
  const cartData = localStorage.getItem('cart')
  if (cartData) {
    const cartItem: TCartItem[] = JSON.parse(cartData)
    const cartDelete = cartItem.filter((item) => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(cartDelete))
  }
}

const initialState: CartState = {
  items: loadLocalStorage(),
}

const dataFull = [...dataComputers, ...dataAccessories]

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      const isAdded = state.items.find((item) => item.id === action.payload.id)
      if (isAdded) {
        alert('товар уже в корзине!')
      } else {
        state.items.push({
          ...action.payload,
          sum: 1,
        })
      }
      saveLocalStorage(state.items)
    },
    removeCart(state, action) {
      const itemId = action.payload
      state.items = state.items.filter((item) => item.id !== itemId)
      deleteLocalStorage(itemId)
    },
    clearCart(state) {
      state.items = []
      localStorage.removeItem('cart')
    },
    incrementSum(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.sum < item.quantity) {
        item.sum += 1
      }
      saveLocalStorage(state.items)
    },
    decrementSum(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.sum > 1) {
        item.sum -= 1
      }
      saveLocalStorage(state.items)
    },

    decrementQuantityComp(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        const comp = dataFull.find((comp) => comp.id === action.payload)
        if (comp && comp.quantity > item.sum) {
          comp.quantity -= item.sum
        } else if (comp) {
          comp.quantity = 0
        }
      }
    },
  },
})

export const {
  setCart,
  removeCart,
  incrementSum,
  decrementSum,
  decrementQuantityComp,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
