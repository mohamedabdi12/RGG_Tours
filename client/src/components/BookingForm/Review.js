import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function Review({ regions, bookingInfo }) {
    console.log('booking Info is: ', bookingInfo);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Review Your Booking Details
            </Typography>
            <Grid container direction='column' spacing={5} style={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Booking Name : {bookingInfo.bookingName}
                        <br></br>
                        Booking Type : {bookingInfo.bookingType} in <br></br>
                        {regions[bookingInfo.bookingRegion].text}

                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>

                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>

                        <br></br>
                        Booking Time: {bookingInfo.bookingTime.toString()}

                        {/* Region and Type  {bookingInfo.bookingRegion} at {bookingInfo.bookingType} */}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}