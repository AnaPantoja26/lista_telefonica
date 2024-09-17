import { configureStore } from '@reduxjs/toolkit'
import contatoSlice from './contatoSlice'

export const store = configureStore({
  reducer: {
    contatos: contatoSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
