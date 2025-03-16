import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { CheckCircle, Delete } from "@mui/icons-material";


const HabitList = () => {

  const { habits } = useSelector((state: RootState) => state.habits)
  
  const today = new Date().toISOString().split('T')[0]

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {habits.map(habit => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }} >
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
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Stack>
  )
}
export default HabitList