import { createSlice } from '@reduxjs/toolkit'

const initialState  = [
  {id: 1, value: 0},
  {id: 2, value: 5},
]

const countersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment: (state, action) => {
       const counterIndex = state.findIndex(c => c.id === action.payload)
    },
    decrement: (state, action) => { 

    }
  }

})