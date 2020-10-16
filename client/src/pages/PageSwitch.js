import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from "../utils/API";

import LandingPage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Tours from './Tours';
import Booking from './Booking';

const PageSwitch = () => {
  const [user, setUser] = useState(null);
  const [tourImages, setTourImages] = useState({})
  useEffect(() => {
    API.currentUser().then(res => {
      setUser(res.data);
    }).catch(err => {

    })
  }, [])

  //array of promises, passing into promise.all; once finished, the axios array of responses is converted into an array of arrays
  useEffect(() => {
    API.getTours().then(async ({ data: tours }) => {
      const tourImages = await Promise.all(tours.map(({ id, bgImg }) => {
        const image = new Image();
        image.src = bgImg;
        return Promise.all([id, image.decode().then(() => image)]);
      }));
      setTourImages(() => tourImages.reduce((map, [id, img]) => {
        map[id] = img;
        return map;
      }, {})
      );
    });
  }, []);

  return (<Switch>
    <Route exact path="/">
      <LandingPage user={user} setUser={setUser} />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/tours">
      <Tours />
    </Route>
    <Route exact path="/booking">
      <Booking user={user} setUser={setUser} />
    </Route>
  </Switch>)
}

export default PageSwitch;