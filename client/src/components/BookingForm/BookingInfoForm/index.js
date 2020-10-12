import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

import DateAndTimePickers from "./DateTimePickers"
import RegionAndTypePickers from "./RegionTypePickers"

export default function BookingInfoForm({ regions, bookingInfo, setBookingInfo }) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Booking Details
            </Typography>
            <Grid container direction='column' spacing={5} style={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Booking Name"
                        fullWidth
                        autoComplete="given-name"
                        value={bookingInfo.bookingName}
                        onChange={({ target }) =>
                            setBookingInfo({ ...bookingInfo, bookingName: target.value })
                        }
                    />
                </Grid>
                <DateAndTimePickers bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />
                <RegionAndTypePickers regions={regions} bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />
            </Grid>
        </>
    )

}
