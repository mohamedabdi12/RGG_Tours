import React from 'react';
import { Typography } from '@material-ui/core';

function hyphenate(str) {
    const subIds = [];
    for (let i = 0; i < str.length; i += 4) {
        subIds.push(str.substr(i, 4));
    }
    return subIds.join("-");
}

export default function OrderPlaced({ orderId }) {
    return (
        <>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
        </Typography>
            <Typography variant="subtitle1">
                Your order number is {hyphenate(orderId)}. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
        </Typography>
        </>
    )
}