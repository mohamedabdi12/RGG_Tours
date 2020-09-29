import React, { Component } from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';
import { GoogleLogin } from 'react-google-login';

/* import jwt from 'jsonwebtoken'; */

const clientId = "205158470591-frud5g1h9dmquka6n1e3mhju7rglm33i.apps.googleusercontent.com";

class Booking extends Component {
  constructor() {
    super();
    this.onAuthSuccess.bind(this);
    this.onAuthFailure.bind(this);
  }

  onAuthSuccess(res) {
    console.log(res);
    fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + res.tokenId).then(res => res.json()).then(res => {
      console.log(res);
    })
  }

  onAuthFailure(res) {
    console.log(res);
  }

  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}><br></br>

            <div>{/* Textfield with floating label */}
              <Textfield
                onChange={() => { }}
                label="USERNAME"
                floatingLabel
              />
              <br></br>
              {/* Numeric Textfield with floating label */}
              <Textfield
                onChange={() => { }}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="PASSWORD"
                floatingLabel
              />
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={this.onAuthSuccess}
                onFailure={this.onAuthFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>

            <div className="banner-text">
              <h1>Reds Gold and Greens</h1>

              <hr />

              <p>Serving you, in case you get over served!</p>



              <div className="social-links">

                {/* Eventbrite */}
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

export default Booking;