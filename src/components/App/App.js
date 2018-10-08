import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePageContainer from 'containers/HomePage/HomePage'
import DashboardHomeContainer from 'containers/DashboardHome/Dashboard'
import SimulacionContainer from 'containers/Simulacion/Simulacion'
import history from 'history/history';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePageContainer} />
          <Route path={ROUTES.DASHBOARD} exact component={DashboardHomeContainer} />
          <Route path={ROUTES.SIMULACION} exact component={SimulacionContainer} />
        </Switch>
      </Router>
    );
  }
}