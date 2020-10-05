import React from "react";
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import "./style.css";

const TourCard = (props) => {
    /*
      description - string
      bgImg - string
      links - [{ text, href }]
    */
    const { title, description, bgImg, links } = props;

    return (
        <Card className="tour-card" shadow={5}>
            <CardTitle style={{ backgroundImage: `url(${bgImg})` }} >{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardActions border>
                {links.map(({ text, href }, i) => (<Button key={title+i} colored>{href ? <a href={href}>{text}</a> : text}</Button>))}
            </CardActions>
            <CardMenu>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    );
}

export default TourCard;