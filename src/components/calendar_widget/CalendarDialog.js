import React, { useState, useLayoutEffect, useContext } from 'react'
// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// icons
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';
// context
import { CalendarContext } from '../../context/CalendarContext'
// components
import CalendarHeader from './CalendarHeader'
import CalendarDisplay from './CalendarDisplay'
import CalendarForm from './CalendarForm'
import CalendarTimezone from './CalendarTimezone'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    content: {
        padding: 0
    },
    dialog: {
        padding: '0 !important'
    },
    mtop: {
        marginTop: 80
    },
    card: {
        position: 'relative',
    },
    card1: {
        position: 'relative',
        overflowY: 'scroll'
    },
    media: {
        height: '100%',
        paddingTop: '56.25%' // 16:9
    },
    overlay: {
        position: 'absolute',
        top: '50px',
        left: '20px',
        color: 'black',
        backgroundColor: 'none'
    }
}));

export default function CalendarDialog() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const { pickDate, reset, backToCalendar, backToTime, viewForm } = useContext(CalendarContext)
    const [width, height] = useWindowSize();

    const handleClickOpen = () => {
        setOpen(true);
        reset()
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Custom Calendar widget
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className={classes.root}
                maxWidth={'sm'}
                fullWidth={true}
            >
                <Card className={width <= 400 ? classes.card1 : classes.card}>
                    <Grid container className={classes.grid}>
                        <Grid item md={6} xs={12}>
                            <CardMedia image={'https://image.freepik.com/free-vector/colorful-blocks-blank-white-background-vector_53876-67037.jpg'} className={classes.media} />
                            <div className={classes.overlay}>
                                <CalendarHeader />
                                <Grid item md={12} style={{ marginTop: 10 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<DateRangeIcon />}
                                        onClick={backToCalendar}
                                    >
                                        Calendar
                                    </Button>
                                    <Button
                                        style={{ marginLeft: 10 }}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AccessTimeIcon />}
                                        onClick={backToTime}
                                    >
                                        Time
                                    </Button>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className={width <= 400 ? classes.mtop : ''}>
                            {!pickDate ? <CalendarDisplay /> : null}
                            {pickDate && !viewForm ? <CalendarTimezone /> : null}
                            {pickDate && viewForm ? <CalendarForm /> : null}
                        </Grid>
                    </Grid>
                </Card>
            </Dialog>
        </div >
    );
}
