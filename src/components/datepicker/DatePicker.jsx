import {useState} from 'react';
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function DatePicker() {
        const [value, setValue] = useState(new Date())
    return (
        <div>
            <DateTimePicker onChange={setValue} value={value} />
        </div>
    )
}

<div><DatePicker></DatePicker></div>

export default DatePicker;