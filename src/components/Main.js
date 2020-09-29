import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Projecttours from './Projecttours';
import Responses from './Responses';



const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projecttours" component={Projecttours} />
    <Route path="/responses" component={Responses} />
  </Switch>
)

export default Main;