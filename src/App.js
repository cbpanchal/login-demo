import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Auth from './hocs/Auth';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth(Dashboard)} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Auth(Login)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
