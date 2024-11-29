import { configureStore } from '@reduxjs/toolkit'
import breadcrumbReducer from './features/breadcrumb/breadcrumbSlice'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cartSlice/cartSlice'

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
    user: userReducer,
    cart: cartReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
