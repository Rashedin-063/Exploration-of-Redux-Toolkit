import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habits/habitSlice'

const store = configureStore({
  reducer: {
   habits: habitReducer
  }
})


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch