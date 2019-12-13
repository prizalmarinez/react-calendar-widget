import React, { useState, createContext } from 'react'
export const CalendarContext = createContext()

export const CalendarProvider = (props) => {
    const [date, setDate] = useState(new Date())
    const [pickDate, setPickDate] = useState(false)
    const [viewForm, setViewForm] = useState(false)

    const selectDate = (data) => {
        setDate(data)
    }

    const goToTime = () => {
        setPickDate(true)
        console.log('hit')
    }

    const reset = () => {
        setPickDate(false)
        setDate(new Date())
    }

    const backToCalendar = () => {
        setPickDate(false)
    }

    const backToTime = () => {
        setPickDate(true)
        setViewForm(false)
    }

    const goToForm = () => {
        setViewForm(true)
    }

    return (
        <CalendarContext.Provider value={{
            date,
            pickDate,
            selectDate: selectDate,
            goToTime: goToTime,
            reset: reset,
            backToCalendar: backToCalendar,
            backToTime: backToTime,
            viewForm: viewForm,
            goToForm: goToForm
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}