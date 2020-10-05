import React from "react";
import { Grid, Cell } from 'react-mdl';

import TourCard from "../TourCard";

import "./style.css";

const TourGrid = (props) => {
    /*
      tours - [tours]
    */
    const { tours } = props;

    return (
        <Grid>
            <Cell col={12}>
                <div className="content">
                    {!!tours && tours.map(({ title, description, bgImg, links }, i) => (<TourCard key={i} title={title} description={description} bgImg={bgImg} links={links} />))}
                </div>
            </Cell>
        </Grid>
    );
}

export default TourGrid;