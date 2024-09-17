'use client';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '@/redux/CreateAdSlice';

export default function DatePickerComponent({ type }) {
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    if (type === 'start') {
      dispatch(setStartDate(date ? date.format('YYYY-MM-DD') : ''));
    } else if (type === 'end') {
      dispatch(setEndDate(date ? date.format('YYYY-MM-DD') : ''));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
