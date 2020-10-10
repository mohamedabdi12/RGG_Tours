import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, Typography, TextField, FormControlLabel, FormControl, Checkbox, InputLabel, MenuItem, FormHelperText, Select } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function BookingInfoForm({bookingInfo, setBookingInfo}) {
    return(
        <>
            <Typography variant="h6" gutterBottom>
                Booking Details
            </Typography>
            <Grid container direction='column' spacing={5} style={{marginBottom: '20px'}}>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Booking Name"
                        fullWidth
                        autoComplete="given-name"
                        value={bookingInfo.bookingName}
                        onChange={({target})=>
                            setBookingInfo({...bookingInfo, bookingName: target.value})
                        }
                    />
                </Grid>
            <DateAndTimePickers bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />
            <RegionAndTypePickers bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />
            </Grid>
        </>
    )

}


function DateAndTimePickers({bookingInfo, setBookingInfo}){
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" spacing={5}>
                <Grid item>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        style={{width: '25ch'}}
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Booking Date"
                        value={bookingInfo.bookingDate || new Date()}
                        onChange={value =>
                            setBookingInfo({...bookingInfo, bookingDate: value})
                        }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item>
                    <KeyboardTimePicker
                        style={{width: '25ch'}}
                        margin="normal"
                        label="Booking Time"
                        value={bookingInfo.bookingTime || new Date()}
                        onChange={value => {
                            setBookingInfo({...bookingInfo, bookingTime: value})
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

function RegionAndTypePickers({bookingInfo, setBookingInfo}){
    return(
        <Grid container justify="center" spacing={5}>
        <Grid item>
            <FormControl
            style={{width: '25ch'}}
            >
                <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>NW Portland</MenuItem>
                    <MenuItem value={20}>SE Portland</MenuItem>
                    <MenuItem value={30}>Central Oregon</MenuItem>
                    <MenuItem value={40} >Southern Oregon</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl
                style={{width: '25ch'}}
            >
                <InputLabel id="demo-controlled-open-select-label">Tour Type</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Winery</MenuItem>
                    <MenuItem value={20}>Brewery</MenuItem>
                    <MenuItem value={30}>Dispensary</MenuItem>
                    <MenuItem value={40}>Combo</MenuItem>
                    <MenuItem value={50}>Surprise Me!</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
    )
}