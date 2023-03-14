'use client'
import { configureStore } from '@reduxjs/toolkit'
import AlertSlice from './Slices/Alert/AlertSllice'

export const store = configureStore({
  reducer: {
    alert: AlertSlice,
  },
})