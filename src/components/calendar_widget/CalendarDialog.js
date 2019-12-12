import React, { useState } from 'react'
// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components
import CalendarHeader from './CalendarHeader'
import CalendarDisplay from './CalendarDisplay'
import CalendarForm from './CalendarForm'

const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1
    },
    root: {
        // padding: 0
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
    }
}));

export default function CalendarDialog() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
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
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.root}
                fullWidth={true}
            >
                <div className={classes.header}>
                    <CalendarHeader />
                </div>
                {/* <DialogContent className={classes.content}> */}
                <div>
                    <Grid container className={classes.grid}>
                        <Grid item md={6} xs={12} >
                            <CalendarDisplay />
                        </Grid>
                        <Grid item md={6} xs={12} >
                            <CalendarForm />
                        </Grid>
                    </Grid>
                </div>
                {/* </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
