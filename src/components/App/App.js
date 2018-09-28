import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePageContainer from 'containers/HomePage/HomePage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePageContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
