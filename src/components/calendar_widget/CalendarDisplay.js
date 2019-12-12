import React, { useState, useContext } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
// context
import { CalendarContext } from '../../context/CalendarContext'


export default function CalendarDisplay() {
    const { date, selectDate } = useContext(CalendarContext)

    const handleDateChange = date => {
        selectDate(date);
    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    style={{ width: 250 }}
                    autoOk
                    variant="static"
                    views={["date"]}
                    value={date}
                    onChange={handleDateChange}
                    disableToolbar={true}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}
