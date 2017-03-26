import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Header from './components/header';
import Welcome from './components/welcome';
import BeltListContainer from './components/belts/belt_list_container';
import Technique from './components/techniques/technique';
import NoMatch from './no_match';
       //   <Redirect from="/technique/beltlist" to="/beltlist" />

export default () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Welcome} />
        <Route path="/beltlist" component={BeltListContainer} />
        <Route exact path="/technique/:techId" component={Technique} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>