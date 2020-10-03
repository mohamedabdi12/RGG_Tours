import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { GoogleLogin } from 'react-google-login';
import API from "../utils/API";
import BookingForm from "../components/BookingForm";


const clientId = "205158470591-frud5g1h9dmquka6n1e3mhju7rglm33i.apps.googleusercontent.com";

const Booking = (props) => {
  const onAuthSuccess = (res) => {
    console.log(res);
    const { setUser } = props;
    API.getUser(res.profileObj)
    //we can use this to get user info from saved token, so they don't have to log in again. -store in browser? local storage or session storage
    fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + res.tokenId).then(res => res.json()).then(res => {
    //   //make a database req to check if user exists; if exists=> signin, if not, find a way to add user to db.
      API.getUser(res)
      setUser(res);
    });
  }

  const onAuthFailure = (res) => {
    console.log(res);
  }

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className="booking-grid">
        <Cell col={12}>
          {
            props.user === null ? (
              <>               
                <GoogleLogin
                  clientId={clientId}
                  //append client ID to user 
                  buttonText="Login with Google"
                  onSuccess={onAuthSuccess}
                  onFailure={onAuthFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </>
            ) : (
                <>
                  <h1>Welcome {props.user.name}</h1>
                  {/* <h2>Logged in as: {props.user.email}</h2> */}
                  <BookingForm />
                </>
              )
          }
        </Cell>
      </Grid>
    </div>
  );
}

export default Booking;