import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function DateAndTimePickers({ bookingInfo, setBookingInfo }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" spacing={5}>
                <Grid item>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        style={{ width: '25ch' }}
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Booking Date"
                        value={bookingInfo.bookingTime}
                        onChange={value =>
                            setBookingInfo({ ...bookingInfo, bookingTime: value })
                        }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item>
                    <KeyboardTimePicker
                        style={{ width: '25ch' }}
                        margin="normal"
                        label="Booking Time"
                        value={bookingInfo.bookingTime}
                        onChange={value => {
                            setBookingInfo({ ...bookingInfo, bookingTime: value })
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </ Grid>
        </ MuiPickersUtilsProvider>
    )
}

