import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { Box, Button, LinearProgress, Paper, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { CheckCircle, Delete } from "@mui/icons-material";
import { Habit, removeHabit, toggleHabit } from "../features/habits/habitSlice";

export const getStreak = (habit: Habit) => {
  let streak = 0;
  const currentDate = new Date();

  while (true) {
    const dateString = currentDate.toISOString().split('T')[0];
    if (habit.completedDates.includes(dateString)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};

const HabitList = () => {

  const { habits } = useSelector((state: RootState) => state.habits)
  const dispatch = useDispatch<AppDispatch>()
  
  const today = new Date().toISOString().split('T')[0]



  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {habits.map(habit => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>
                  {habit.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ textTransform: 'capitalize' }}
                >
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    color={
                      habit.completedDates.includes(today)
                        ? 'success'
                        : 'primary'
                    }
                    startIcon={<CheckCircle />}
                    onClick={() =>
                      dispatch(toggleHabit({ id: habit.id, date: today }))
                    }
                  >
                    {habit.completedDates.includes(today)
                      ? 'Completed'
                      : 'Mark Complete'}
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    color='error'
                    startIcon={<Delete />}
                    onClick={() => dispatch(removeHabit({ id: habit.id }))}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* streak */}

            <Box sx={{ mt: 2 }}>
              <Typography variant='body2'>
                Current Streak : {getStreak(habit)} days
              </Typography>
              <LinearProgress variant="determinate" value={(getStreak(habit) / 10) * 100} sx={{mt: 1}}/>
            </Box>
          </Paper>
        );
      })}
    </Stack>
  )
}
export default HabitList