import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { GoogleLogin } from 'react-google-login';
import API from "../utils/API";
import BookingForm from "../components/BookingForm";
import "./Booking.css";

const clientId = process.env.NODE_ENV === "production" ? "" : "205158470591-frud5g1h9dmquka6n1e3mhju7rglm33i.apps.googleusercontent.com";

const Booking = (props) => {
  const onAuthSuccess = async ({ accessToken }) => {
    const { setUser } = props;
    try {
      const res = await API.authenticate({ access_token: accessToken })
      setUser(res.data);
      console.log("User", res.data);
    } catch (err) {
      console.error('error in onAuthSucess: ', err);

    }
  }

  const onAuthFailure = (res) => {
    console.log('auth failure returns: ', res);
  }

  let content = (<></>);
  if (props.user == null) {
    content = (<>
      <GoogleLogin
        clientId={clientId}
        //append client ID to user 
        buttonText="Login with Google"
        onSuccess={onAuthSuccess}
        onFailure={onAuthFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>);
  } else {
    content = (<>
      <h1>Welcome {props.user.fullName}</h1>
      {/* <h2>Logged in as: {props.user.email}</h2> */}
      <BookingForm />
    </>)
  }

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className="booking-grid">
        <Cell col={12}>
          {content}
        </Cell>
      </Grid>
    </div>
  );
}

export default Booking;