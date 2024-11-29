import { createSlice } from '@reduxjs/toolkit'
type TCartItem = {
  id: string
  label: string
  price: number
  quantity: number
  src: string
  sum: number
}

type CartState = {
  items: TCartItem[]
}
const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.items.push({
        ...action.payload,
        sum: 1,
      })
    },
    removeCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { setCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
