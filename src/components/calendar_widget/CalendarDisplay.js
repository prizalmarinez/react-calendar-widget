import React, { useContext } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
// context
import { CalendarContext } from '../../context/CalendarContext'


export default function CalendarDisplay() {
    const { date, selectDate, goToTime } = useContext(CalendarContext)

    const handleDateChange = date => {
        selectDate(date);
        goToTime()
    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div style={{ maxWidth: 500 }}>
                    <DatePicker
                        autoOk
                        variant="static"
                        views="date"
                        value={date}
                        onChange={handleDateChange}
                        disableToolbar={true}
                    />
                </div>
            </MuiPickersUtilsProvider>
        </div>
    )
}
