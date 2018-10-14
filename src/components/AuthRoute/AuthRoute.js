import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import history from 'history/history'
import User from 'components/User/User';

export default class AuthRoute extends Component {

  constructor(props) {
    super(props);

    // When user not authenticated redirect to login page
    if (!User.getName()) {
      history.push(ROUTES.HOME);
    }
  }

  render() {
    if (!User.getName()) {
      return null;
    }

    return <Route {...this.props} />;
  }
}