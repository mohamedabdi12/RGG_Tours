import React, { useState, useEffect } from "react";
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';

import BookingInfoForm from "./BookingInfoForm"
import PaymentForm from './PaymentForm';
import Review from './Review';
import OrderPlaced from './OrderPlaced'

import BackButton from "./BackButton"
import NextButton from "./NextButton"

import useStyles from './myStyles'
import "./style.css";


import API from "../../utils/API";

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const BookingForm = () => {
    const [regions, setRegions] = useState([]);
    const [bookingInfo, setBookingInfo] = useState({ bookingTime: new Date() })
    const [activeStep, setActiveStep] = React.useState(0);
    const [canProgress, setCanProgress] = useState(false);

    useEffect(() => {
        API.getRegions().then((res) => {
            setRegions(() => res.data);
        }).catch(err => {
            console.error(err);
        })
    }, [])

    useEffect(() => {
        switch (activeStep) {
            case 0: {
                if (bookingInfo.bookingName == null || bookingInfo.bookingRegion == null || bookingInfo.bookingType == null) {
                    setCanProgress(false);
                } else {
                    setCanProgress(true);
                }
                break;
            }
            default:
                setCanProgress(true);
        }
    }, [canProgress, bookingInfo, activeStep])

    const classes = useStyles();

    const handleNext = async() => {
        if (!canProgress) return;
        if (activeStep === steps.length - 1) {
            await createBooking();
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const createBooking = async () => {
        try {
            const res = await API.createBooking({
                ...bookingInfo,
                bookingRegion: regions[bookingInfo.bookingRegion].id
            });
            console.log('res is; ', res);
            setBookingInfo({ ...bookingInfo, bookingNumber: res.data.id })
        } catch (err) {
            console.error(err);
        }
    }

    let content;
    switch (activeStep) {
        case 0: {
            content = <BookingInfoForm regions={regions}
                setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} />
            break;
        }
        case 1: {
            content = <PaymentForm />
            break;
        }
        case 2: {
            content = <Review regions={regions} bookingInfo={bookingInfo} />
            break;
        }
        case steps.length: {
            content = <OrderPlaced orderId={bookingInfo.bookingNumber} />
            break;
        }
        default: {
            content = <Review regions={regions} bookingInfo={bookingInfo} />
            break;
        }
    }

    if (activeStep < steps.length) {
        content = (<>
            {content}
            <div className={classes.buttons}>
                <BackButton activeStep={activeStep} onClick={handleBack} className={classes.button} />
                <NextButton
                    canProgress={canProgress}
                    isLast={activeStep === steps.length - 1}
                    onClick={handleNext}
                    className={classes.button}
                />
            </div>
        </>)
    }

    return (
        <>
            <CssBaseline />
            <section className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {content}
                </Paper>
            </section>
        </>)
}

export default BookingForm;