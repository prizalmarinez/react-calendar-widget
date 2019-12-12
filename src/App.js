import React from 'react';
import './App.css';
// MUI

// components
import CalendarDialog from './components/calendar_widget/CalendarDialog'
// context
import { CalendarProvider } from './context/CalendarContext'

function App() {
  return (
    // <ThemeProvider theme={defaultMaterialTheme}>
    <CalendarProvider>
      <CalendarDialog />
    </CalendarProvider>
    // </ThemeProvider>
  );
}

export default App;
