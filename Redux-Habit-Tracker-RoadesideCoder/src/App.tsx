import { Container, Typography } from "@mui/material"
import AddHabitForm from "./components/AddHabitForm"
import HabitList from "./components/HabitList"

const App = () => {
  return (
    <Container maxWidth='md' sx={{mt: 4}}>
      <Typography component='h1' variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList/>
   </Container>
  )
}
export default App