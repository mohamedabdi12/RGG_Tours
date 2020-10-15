import React from 'react';
import { Typography } from '@material-ui/core';

function hyphenate(str) {
    const subIds = [];
    for (let i = 0; i < str.length - 12; i += 4) {
        subIds.push(str.substr(i, 4));
    }
    return subIds.join("-");
}

export default function OrderPlaced({ orderId, orderName, orderType, orderTime, regions, bookingInfo }) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="h5">
                Your confirmation number is
                <Typography variant="h6" gutterBottom style={{
                    fontSize: 30,
                    fontWeight: "bolder"
                }} >
                    {hyphenate(orderId)}
                    <Typography spacing={5} variant="h6" gutterBottom>
                        <Typography style={{
                            fontSize: 25,
                            fontWeight: "bold"
                        }}>
                            Order Summary: <br></br>
                        </Typography >
                Name: {orderName}
                        <br></br>
                        <Typography  variant="h6" gutterBottom>
                            Type: {orderType}&nbsp;in&nbsp;
                            {regions[bookingInfo.bookingRegion].text}
                        </Typography >
               Date & Time: <br></br> {orderTime}
                    </Typography>
                </Typography>
                We have emailed your order confirmation.  Please print this page for your records.
                </Typography >
        </>
    )
}