import React from "react";
import {Button } from '@material-ui/core';

const NextButton = ({ canProgress, isLast, ...rest }) => {
    return <Button
        variant="contained"
        color="primary"
        disabled={!canProgress}
        {...rest}
    >
        {!isLast ? 'Next' : 'Place order'}
    </Button>
}

export default NextButton;