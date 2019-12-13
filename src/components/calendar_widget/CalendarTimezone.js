import React, { useState, useEffect, useContext } from 'react'
import momentTimezone from 'moment-timezone'
// MUI
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
// context
import { CalendarContext } from '../../context/CalendarContext'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: 0,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CalendarTimezone() {
    const classes = useStyles()
    const timeZones = momentTimezone.tz.names();
    const [timezone, setTimezone] = useState('');
    const { date, selectDate, goToForm } = useContext(CalendarContext)
    const [time, changeTime] = useState(date);

    const handleDateChange = date => {
        selectDate(date);
        changeTime(date)
    };

    useEffect(() => {
        const zone_name = momentTimezone.tz.guess();
        setTimezone(zone_name)
    }, [])

    const handleChange = event => {
        setTimezone(event.target.value);
    };

    const menuItem = timeZones.map((item) => (
        <MenuItem key={item} value={item}>{item}</MenuItem>
    ))

    return (
        <div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Timezone</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={timezone}
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {menuItem}
                </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <TimePicker
                    autoOk
                    variant="static"
                    openTo="hours"
                    value={time}
                    onChange={handleDateChange}
                    disableToolbar={true}
                />
            </MuiPickersUtilsProvider>
            <Grid container>
                <Grid item xs={12} style={{ margin: 10 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIosIcon />}
                        fullWidth
                        onClick={goToForm}
                    >
                        Proceed
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
