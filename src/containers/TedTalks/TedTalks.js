import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import TedTalksComponent from 'components/TedTalks/TedTalks';

export default class TedTalks extends Component {
  render() {
    return (
      <Dashboard>
        <TedTalksComponent/>
      </Dashboard>
    );
  }
}
