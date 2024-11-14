import { configureStore } from '@reduxjs/toolkit'
import breadcrumbReducer from './features/breadcrumb/breadcrumbSlice'
import userReducer from './features/user/userSlice'

export const store =  configureStore({
    reducer: {
        breadcrumb: breadcrumbReducer,
        user: userReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType <typeof store.getState>