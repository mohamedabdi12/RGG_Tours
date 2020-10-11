import React from 'react';
import Button from 'react-bootstrap/Button';
import { Grid, Typography} from '@material-ui/core';

export default function Review({ bookingInfo }) {
    console.log('booking Info is: ', bookingInfo);

    return (
        <>
            <Typography variant="h6" gutterBottom>
               Review Your Booking Details
            </Typography>
            <Grid container direction='column' spacing={5} style={{marginBottom: '20px'}}>
                <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Booking Name : {bookingInfo.bookingName}
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
               
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
         
                    {/* Region and Type  {bookingInfo.bookingRegion} at {bookingInfo.bookingType} */}
                </Typography>
                </Grid>
            </Grid>
        </>
    );
}