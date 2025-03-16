import { Container, Typography } from "@mui/material"
import AddHabitForm from "./components/AddHabitForm"
import HabitList from "./components/HabitList"
import HabitStats from './components/HabitStats';

const App = () => {
  return (
    <Container maxWidth='md' sx={{mt: 4}}>
      <Typography component='h1' variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStats/>
   </Container>
  )
}
export default App