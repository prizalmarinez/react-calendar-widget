import React, { useState, useEffect, createContext } from 'react'
export const CalendarContext = createContext()

export const CalendarProvider = (props) => {
    const [date, setDate] = useState(new Date())

    return (
        <CalendarContext.Provider value={{
            date
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}