import React from "react";

import "./style.css";

const SocialLinks = () => {
    return (
    <div className="social-links">

        {/* Booking */}
        <a href="http://eventbrite.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-calendar" aria-hidden="true" />
        </a>

        {/* LinkedIn */}
        <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

        {/* Yelp */}
        <a href="http://yelp.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-yelp" aria-hidden="true" />
        </a>

        {/* Youtube */}
        <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
        </a>

    </div>)
}

export default SocialLinks;