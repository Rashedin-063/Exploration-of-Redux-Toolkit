import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { FormEvent, useState } from 'react';

type TypeFrequency = 'daily' | 'weekly';

const AddHabitForm = () => {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<TypeFrequency>('daily');

  const handleSubmit = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    alert('form submit')
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <TextField
          label='Habit Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Habit Name'
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as TypeFrequency)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit' variant='contained' color='primary'>
          Add Habit
        </Button>
      </Stack>
    </form>
  );
};
export default AddHabitForm;
