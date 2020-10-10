import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './myStyles'
import StepContent from './StepContent'

function OrderPlaced(){
   return(
    <>
        <Typography variant="h5" gutterBottom>
            Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
            Your order number is #2001539. We have emailed your order confirmation, and will
            send you an update when your order has shipped.
        </Typography>
    </>
   )
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
    const steps = ['Shipping address', 'Payment details', 'Review your order'];
    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
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
                        {activeStep === steps.length ? (
                            <OrderPlaced/>
                        ) : (
                            <StepContent classes={classes} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}  steps={steps} />
                        )}
                </Paper>
            </main>
        </>
    );
}