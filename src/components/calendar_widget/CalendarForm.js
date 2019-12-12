import React, { useState } from 'react'
// MUI
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15
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
                <TextField label="Name" fullWidth value={values.name} />
                <TextField label="Email" fullWidth value={values.email} />
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
                    {/* helperText={`${values.comment.length}/${char_limit}`} */}
                    {values.comment.length + '/' + char_limit}
                </FormHelperText>
            </form>
        </div>
    )
}
