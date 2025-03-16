import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from "../store";
import { useEffect } from "react";
import { fetchHabits, Habit } from "../features/habits/habitSlice";
import { Paper, Stack, Typography } from "@mui/material";

const HabitStats = () => {

   const { habits, isLoading, isError, error } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch])

  //  const getTotalHabits = () => habits.length;


  
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
       
      </Stack>
    </Paper>
  );
}
export default HabitStats