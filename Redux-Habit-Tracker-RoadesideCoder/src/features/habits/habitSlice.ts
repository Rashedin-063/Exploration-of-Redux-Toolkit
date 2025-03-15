import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeFrequency } from "../../components/AddHabitForm";


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
    addHabit: (state, action: PayloadAction<{name: string, frequency: TypeFrequency}>) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      }

      state.habits.push(newHabit);
    },
  }
  })


export default habitSlice.reducer;
export const {addHabit} = habitSlice.actions