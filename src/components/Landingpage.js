import React, { Component } from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTkvMDYvMTgvMDEvNTAvMDUvOTAwL2ZpbGUiXSxbInAiLCJ0aHVtYiIsIjIwMDB4MTAwMCMiXV0"
              alt="Security"
              className="security"
            />

            <div>{/* Textfield with floating label */}
              <Textfield
                onChange={() => { }}
                label="USERNAME"
                floatingLabel
                style={{ width: '200px' }}
              />
                  <br></br>
              {/* Numeric Textfield with floating label */}
              <Textfield
                onChange={() => { }}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="PASSWORD"
                floatingLabel
              /></div>

            <div className="banner-text">
              <h1>Reds Gold and Greens</h1>

              <hr />

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

export default Landingpage;