import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://whiteroselimo.com/wp-content/uploads/2012/10/rent_party_bus_riverside.jpg"
              alt="Tour Bus"
              className="busses"
              />

            <div className="banner-text">
              <h1>Reds Gold and Greens</h1>

            <hr/>

          <p>Serving you, in case you get over served!</p>

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

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;