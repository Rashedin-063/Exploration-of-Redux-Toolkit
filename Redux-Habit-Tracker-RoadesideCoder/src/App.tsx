import { Container, Typography } from "@mui/material"
import AddHabitForm from "./components/AddHabitForm"

const App = () => {
  return (
    <Container maxWidth='md' sx={{mt: 4}}>
      <Typography component='h1' variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm/>
   </Container>
  )
}
export default App