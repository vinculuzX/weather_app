import React from 'react';
import CalendarReact from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = (props) => {
    return (
        <>
            <CalendarReact
                {...props}
                value={props.date}
            />
        </>
    )
}

export default Calendar