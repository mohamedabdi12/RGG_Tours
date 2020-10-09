import React from 'react';
import { Grid, Typography, TextField, FormControlLabel, FormControl, Checkbox, InputLabel, MenuItem, FormHelperText, Select } from '@material-ui/core';
export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Booking Details
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form
                        // https://material-ui-pickers.dev/demo/datepicker

                        // className={classes.container}
                        noValidate>
                        <TextField
                            id="date"
                            label="Booking Date"
                            type="date"
                            defaultValue="2020-10-01"
                            // className={classes.textField}
                            // onChange={date => handleDateChange(date)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <Grid item xs={12} sm={6} >
                        <form
                            // className={classes.container}
                            noValidate>
                            <TextField
                                id="time"
                                label="Tour Arrival Time"
                                type="time"
                                defaultValue="17:00"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl
                            required >
                            <InputLabel id="demo-simple-select-required-label">Region:</InputLabel>
                            <br></br>
                            <br></br>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                            // value={type}
                            // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Choose Region</em>
                                </MenuItem>
                                <MenuItem value={10}>NW Portland</MenuItem>
                                <MenuItem value={20}>SE Portland</MenuItem>
                                <MenuItem value={30}>Central Oregon</MenuItem>
                                <MenuItem value={40}>Southern Oregon</MenuItem>
                            </Select>

                            <br></br>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl
                            required >
                            <InputLabel id="demo-simple-select-required-label">Tour Type:</InputLabel>
                            <br></br>
                            <br></br>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                            // value={type}
                            // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Choose Region</em>
                                </MenuItem>
                                <MenuItem value={10}>Winery</MenuItem>
                                <MenuItem value={20}>Brewery</MenuItem>
                                <MenuItem value={30}>Dispensary</MenuItem>
                                <MenuItem value={40}>Combo</MenuItem>
                                <MenuItem value={50}>Surprise Me!</MenuItem>
                            </Select>

                            <br></br>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}