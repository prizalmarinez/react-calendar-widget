import React, { useState } from 'react'
// MUI
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
// icons
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        minHeight: 250
    },
    helperText: {
        float: 'right'
    }
}));

export default function CalendarForm() {
    const classes = useStyles();
    const char_limit = 120
    const [values, setValues] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label="Name" fullWidth type="text" value={values.name} onChange={handleChange("name")} />
                <TextField label="Email" fullWidth type="email" value={values.email} onChange={handleChange("email")} />
                <TextField
                    id="standard-textarea"
                    label="Comment"
                    multiline
                    fullWidth
                    rowsMax="6"
                    rows="4"
                    inputProps={{ maxLength: char_limit }}
                    value={values.comment}
                    onChange={handleChange("comment")}
                />
                <FormHelperText className={classes.helperText}>
                    {values.comment.length + '/' + char_limit}
                </FormHelperText>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<CheckCircleOutlineIcon />}
                    fullWidth
                    style={{ margin: 10 }}
                >
                    Submit
                    </Button>
            </form>
        </div>
    )
}
