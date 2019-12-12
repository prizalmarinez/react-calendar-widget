import React, { useState, useEffect, createContext } from 'react'
export const CalendarContext = createContext()

export const CalendarProvider = (props) => {
    const [date, setDate] = useState(new Date())

    const selectDate = (data) => {
        setDate(data)
    }

    return (
        <CalendarContext.Provider value={{
            date,
            selectDate: selectDate
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}