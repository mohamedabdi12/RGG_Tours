import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { GoogleLogin } from 'react-google-login';

/* import jwt from 'jsonwebtoken'; */

const clientId = "205158470591-frud5g1h9dmquka6n1e3mhju7rglm33i.apps.googleusercontent.com";

const Booking = (props) => {
  const onAuthSuccess = (res) => {
    console.log(res);
    const { setUser } = props;
    fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + res.tokenId).then(res => res.json()).then(res => {
      console.log(res);
      setUser(res);
    });
  }

  const onAuthFailure = (res) => {
    console.log(res);
  }

  return (
    <div style={{ width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          {
            props.user === null ? (
              <>
                <br></br>

                {/* <div>
                  <Textfield
                    onChange={() => { }}
                    label="USERNAME"
                    floatingLabel
                  />
                  <br></br>
                  
                  <Textfield
                    onChange={() => { }}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="PASSWORD"
                    floatingLabel
                  />
                  <Button type="submit" bsStyle="primary">Sign-In</Button>
                </div> */}
                <GoogleLogin 
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onAuthSuccess}
                  onFailure={onAuthFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </>
            ) : (
              <>
                <h1>{props.user.name}</h1>
              </>
            )
          }
        </Cell>
      </Grid>
    </div>
  );
}

export default Booking;