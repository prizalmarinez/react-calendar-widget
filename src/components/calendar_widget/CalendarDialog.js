import React, { useState } from 'react'
// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// components
import CalendarHeader from './CalendarHeader'
import CalendarDisplay from './CalendarDisplay'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0
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
                <DialogContent className={classes.content}>
                    <div>
                        <Grid container>
                            <Grid item md={6} xs={12} >
                                <div className={classes.grid}>
                                    <CalendarDisplay />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} >
                                <div className={classes.grid}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </DialogContent>
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
