import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/App.css';

import Header from './components/header';
import Welcome from './components/welcome';
import NoMatch from './no_match';

export default () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Welcome} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>