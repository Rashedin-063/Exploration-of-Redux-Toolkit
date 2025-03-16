import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeFrequency } from '../../components/AddHabitForm';

export type Habit = {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[];
  createdAt: string;
};

type HabitState = {
  habits: Habit[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  isError: false,
  error: null,
};

// fetching data
export const fetchHabits = createAsyncThunk('habits/fetchHabits', async () => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const mockHabits: Habit[] = [
    {
      id: '1',
      name: 'Read',
      frequency: 'daily',
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Exercise',
      frequency: 'daily',
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
  ];
  return mockHabits;
});

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: TypeFrequency }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
    toggleHabit: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);

      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);

        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    removeHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits = state.habits.filter((h) => h.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.habits = action.payload
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || 'Failed to fetch habits'
      })
  }
});

export default habitSlice.reducer;
export const { addHabit, toggleHabit, removeHabit } = habitSlice.actions;
