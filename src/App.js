import React from 'react';
import './App.css';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// components
import CalendarHeader from './components/calendar_widget/CalendarHeader'

// context
import { CalendarProvider } from './context/CalendarContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <CalendarProvider>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CalendarHeader />
          </Paper>
        </Grid>
      </div>
    </CalendarProvider>
  );
}

export default App;
