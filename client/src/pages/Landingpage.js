import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import SocialLinks from "../components/SocialLinks";

class Landingpage extends Component {
    render() {
      if (this.props.user !== null) {
        // user logged in
      }
      return (
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h1>Reds Gold and Greens</h1>

                <hr />

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

export default Landingpage;