import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { api } from './services/api'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
