'use client'
import { createSlice } from '@reduxjs/toolkit'

export const AlertSlice = createSlice({
  name: 'alertslice',
  initialState: {
    title: 'Alert Title',
    message: 'Alert Message',
    type: 'none',
  },
  reducers: {
    setAlert: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAlert } = AlertSlice.actions

export default AlertSlice.reducer