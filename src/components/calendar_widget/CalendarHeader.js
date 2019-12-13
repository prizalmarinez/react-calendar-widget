import React, { useContext } from 'react'
// moment
import moment from 'moment'
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// context
import { CalendarContext } from '../../context/CalendarContext'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    month: {
        backgroundColor: '#26a69a',
        marginTop: 10
    },
    calendarControls: {
        marginTop: 10
    }
}));

export default function CalendarHeader() {
    const classes = useStyles();
    const { date } = useContext(CalendarContext)

    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <div className={classes.pad}>
                    <Typography variant="h4">
                        {moment(date).format('dddd')}
                    </Typography>
                    <Typography variant="h5">
                        {moment(date).format('MMMM')}, {moment(date).format('YYYY')}
                    </Typography>
                    <Typography variant="h3" >
                        {moment(date).format('Do')}
                    </Typography>
                    <Typography variant="h4" >
                        {moment(date).format('hh:mm')}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
