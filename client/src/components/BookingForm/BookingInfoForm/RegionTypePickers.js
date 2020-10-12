import { Grid, FormControl, InputLabel, Select } from '@material-ui/core';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const tourTypes = [
    "Winery",
    "Brewery",
    "Dispensary",
    "Combo",
    "Surprise Me!"
]

export default function RegionAndTypePickers({ regions, bookingInfo, setBookingInfo }) {

    return (
        <Grid container justify="center" spacing={5}>
            <Grid item>

                <FormControl
                    style={{ width: '25ch' }}
                    onChange={(e) => console.log(e)}
                >
                    <InputLabel id="select-label" htmlFor="select">Region</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        onChange={(e) => setBookingInfo({ ...bookingInfo, bookingRegion: +e.target.value / 10 - 2 })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {regions.map(({ text, id }, i) => (<MenuItem value={(i + 2) + "0"} key={i}>{text}</MenuItem>))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl
                    style={{ width: '25ch' }}
                >
                    <InputLabel id="demo-controlled-open-select-label">Tour Type</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        onChange={(e) => setBookingInfo({ ...bookingInfo, bookingType: tourTypes[+e.target.value / 10 - 2] })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {tourTypes.map((text, i) => (<MenuItem value={(i + 2) + "0"} key={i}>{text}</MenuItem>))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid >
    )
}
