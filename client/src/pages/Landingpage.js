import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import SocialLinks from "../components/SocialLinks";

import "./Landingpage.css";

class Landingpage extends Component {
  render() {
    if (this.props.user !== null) {
      // user logged in
    }
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://img.grouponcdn.com/deal/bvzGEhcGbXthKQH5TF89/tT-700x420/v1/c700x420.webp"
              alt="Tour Bus"
              className=""
            />


            <div className="banner-text">
              <h1>Reds, Gold & Greens</h1>

              <hr />

              <p>RGG Tours is your premium tour operator in Oregon.<br></br> We specialize in <span className="span-winery">Winery</span>, <span className="span-brewery">Brewery</span>, and <span className="span-dispensary">Dispensary</span> tours throughout the state.</p>
              <p><span className="span-book"><a href="https://reds-gold-greens.herokuapp.com/booking">Book Now!</a></span>  -- Find out more about our tours <span className="span-here"> <a href="https://reds-gold-greens.herokuapp.com/about">here!</a></span>.</p>
              <p>We're here to make sure you have a great time!</p>




              <SocialLinks />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;