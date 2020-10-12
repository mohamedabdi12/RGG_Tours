import React from "react";
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core';

const BackButton = ({ activeStep, ...rest }) => {
    if (activeStep === 0) return <></>;
    else return (<Button {...rest}>
        Back
    </Button>)
}
export default BackButton;