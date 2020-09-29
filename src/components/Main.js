import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Tours from './Tours';
import Booking from './Booking';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/tours" component={Tours} />
    <Route path="/booking" component={Booking} />
  </Switch>
)

export default Main;