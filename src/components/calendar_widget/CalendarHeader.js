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
        flexGrow: 1,
        color: '#ffffff'
    },
    day: {
        backgroundColor: '#009688'
    },
    month: {
        backgroundColor: '#26a69a'
    },
    pad: {
        padding: theme.spacing(1),
    }
}));

export default function CalendarHeader() {
    const classes = useStyles();
    const { date } = useContext(CalendarContext)

    return (
        <div className={classes.root}>
            <Grid item xs={12} className={classes.day}>
                <div className={classes.pad}>
                    <Typography variant="subtitle1">
                        {moment(date).format('dddd')}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.month}>
                <div className={classes.pad}>
                    <Typography variant="h5">
                        {moment(date).format('MMMM')}, {moment(date).format('YYYY')}
                    </Typography>
                </div>
                <Typography variant="h3" >
                    {moment(date).format('Do')}
                </Typography>
                <div className={classes.pad}>
                    <Typography variant="h5" >
                        16:00 - 16:30
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
