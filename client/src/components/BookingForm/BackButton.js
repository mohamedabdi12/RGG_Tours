import React from "react";
import { Button } from '@material-ui/core';

const BackButton = ({ activeStep, ...rest }) => {
    if (!activeStep) return <></>;
    else return (<Button {...rest}>
        Back
    </Button>)
}
export default BackButton;