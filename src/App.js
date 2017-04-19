import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Header from './components/header';
import Welcome from './components/welcome';
import BeltListContainer from './components/belts/belt_list_container';
import TechniqueContainer from './containers/technique_container';
import NoMatch from './no_match';

export default () => 
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Welcome} />
        <Route path="/beltlist" component={BeltListContainer} />
        <Route exact path="/technique/:techId" component={TechniqueContainer} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>