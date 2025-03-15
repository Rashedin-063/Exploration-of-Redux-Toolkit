import { createSlice } from "@reduxjs/toolkit";


export type Habit = {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[];
  createdAt: string
}

type HabitState = {
  habits: Habit[],
}

const initialState: HabitState = {
 habits: [],
}

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
  addHabit: () => {}
  }
})


export default habitSlice.reducer;
export const {addHabit} = habitSlice.actions