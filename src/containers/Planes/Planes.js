import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import Planes from 'components/Planes/Planes';

export default class PlanesContainer extends Component {
  render() {
    return (
      <Dashboard>
        <Planes/>
      </Dashboard>
    );
  }
}