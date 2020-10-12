import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import SocialLinks from "../components/SocialLinks";

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
              <p>Serving you, in case you get over served!</p>


              <hr/>

              <p>Serving you, in case you get over served!</p>
              <p>Serving you, in case you get over served!</p>


              <hr/>

              <p>Serving you, in case you get over served!</p>
              <p>Serving you, in case you get over served!</p>

              <SocialLinks />
        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;