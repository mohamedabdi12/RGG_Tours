import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import SocialLinks from "../components/SocialLinks";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://whiteroselimo.com/wp-content/uploads/2012/10/rent_party_bus_riverside.jpg"
              alt="Tour Bus"
              className="busses"
            />

            <div className="banner-text">
              <h1>Reds, Gold & Greens</h1>

              <hr />


              <p>Our all inclusive upfront pricing makes your event easy to manage!<br></br>No matter which type of tour you you want to take, we have you covered.<br></br>So what do you get? <br></br><br></br> <span className="six-hour-tour">6 Hour Tours Only $500</span><br></br>
              (up to 5 people)<br></br><br></br> More people, no problem!<br></br><br></br> <span className="eight-hour-tour">$800 for up to 10 people!</span></p>
             


              <SocialLinks />

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;