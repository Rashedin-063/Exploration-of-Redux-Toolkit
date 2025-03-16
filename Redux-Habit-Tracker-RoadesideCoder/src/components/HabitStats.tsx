import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../store";
import { useEffect } from "react";
import { fetchHabits} from "../features/habits/habitSlice";
import { Paper, Stack, Typography } from "@mui/material";
import { getStreak } from "./HabitList";

const HabitStats = () => {

   const { habits, isLoading, isError, error } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch])

  const getCompletedToday = () => {
    const today = new Date().toISOString().split('T')[0]
    return habits.filter((habit) => habit.completedDates.includes(today)).length;
  }
  
  const getLongestStreak = () => {
    return Math.max(...habits.map((habit) => getStreak(habit)), 0)
  }

  // const getLongestStreak = () => {
  //    const getStreak = (habit: Habit) => {
  //     let streak = 0;
  //     const currentDate = new Date();

  //     while (true) {
  //       const dateString = currentDate.toISOString().split("T")[0];
  //       if (habit.completedDates.includes(dateString)) {
  //         streak++;
  //         currentDate.setDate(currentDate.getDate() - 1);
  //       } else {
  //         break;
  //       }
  //     }

  //     return streak;
  //   };
  //   return Math.max(...habits.map(getStreak), 0);
  // }


  
  if (isLoading) return <Typography variant="h6" align="center">Loading...</Typography>;
  if (isError) return <Typography variant="h6" align="center">Error: {error}</Typography>;


  
  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
      <Typography variant='h6' gutterBottom>
        Habit Statistics
      </Typography>
      <Stack spacing={1}>
        <Typography variant='body1'>
          Total Habits: {habits.length}
        </Typography>
       
        <Typography variant='body1'>
          Completed Today: {getCompletedToday()}
        </Typography>
        <Typography variant='body1'>
          Longest Streak: {getLongestStreak()}
        </Typography>
       
      </Stack>
    </Paper>
  );
}
export default HabitStats