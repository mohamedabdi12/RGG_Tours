
import DateTimePickers from "./DateTimePickers"
import { Grid, Typography, TextField, FormControlLabel, FormControl, Checkbox, InputLabel, Button, FormHelperText, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import API from "../../../utils/API";

const tourTypes = [
    "Winery",
    "Brewery",
    "Dispensary",
    "Combo",
    "Surprise Me!"
]

export default function RegionAndTypePickers({ bookingInfo, setBookingInfo }) {
    const [regions, setRegions] = useState([]);
    const [regionSelection, setRegionSelection] = useState(null);

    useEffect(() => {
        API.getRegions().then((res) => {
            setRegions(() => res.data);
        }).catch(err => {
            console.error(err);
        })
    }, [])

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
                        onChange={(e) => setBookingInfo({ ...bookingInfo, bookingRegion: regions[+e.target.value / 10 - 2].id })}
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

function SimpleMenu({ bookingInfo, setBookingInfo }) {
    return (
        <Grid container justify="center" spacing={5}>
            <Grid item>
                <FormControl
                    style={{ width: '25ch' }}
                >
                    <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>NW Portland</MenuItem>
                        <MenuItem value={20}>SE Portland</MenuItem>
                        <MenuItem value={30}>Central Oregon</MenuItem>
                        <MenuItem value={40} >Southern Oregon</MenuItem>
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
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Winery</MenuItem>
                        <MenuItem value={20}>Brewery</MenuItem>
                        <MenuItem value={30}>Dispensary</MenuItem>
                        <MenuItem value={40}>Combo</MenuItem>
                        <MenuItem value={50}>Surprise Me!</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}