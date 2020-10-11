import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../../../utils/API'
import DateTimePickers from "../BookingInfoForm/DateTimePickers"
import PaymentForm from '../PaymentForm';
import Review from '../Review';


function getStepContent(step, setBookingInfo, bookingInfo) {
    switch (step) {
        case 0:
            return <DateTimePickers
                setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review bookingInfo={bookingInfo} />;
        default:
            throw new Error('Unknown step');
    }
}


function StepContent({ activeStep, handleBack, handleNext, classes, steps }) {
    const [bookingInfo, setBookingInfo] = useState({})
    const [bookingNumber, setBookingNumber] = useState(0);
    const [canProgress, setCanProgress] = useState(false);

    function createBooking() {
        API.createBooking({
            ...bookingInfo
        })
            .then(res => {
                console.log('res is; ', res);
                //setBookingNumber(res.data.id);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        switch (activeStep) {
            case 0: {
                if (!bookingInfo.bookingName || !bookingInfo.bookingRegion || !bookingInfo.bookingType) {
                    setCanProgress(false);
                } else {
                    setCanProgress(true);
                }
                break;
            }
        }
    })

    return (
        <>
            {getStepContent(activeStep, setBookingInfo, bookingInfo)}
            <div className={classes.buttons}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!canProgress}
                    onClick={() => {
                        if (!canProgress) return;
                        if (activeStep !== steps.length - 1) {
                            handleNext();
                        } else {
                            createBooking()
                        }
                    }}
                    className={classes.button}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
            </div>
        </>
    )
}


export default StepContent