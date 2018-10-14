import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import Estimaciones from 'components/Estimaciones/Estimaciones';

export default class EstimacionesContainer extends Component {
  render() {
    return (
      <Dashboard>
        <Estimaciones/>
      </Dashboard>
    );
  }
}
