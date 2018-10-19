import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import CasosEstimacionesComponent from 'components/CasosEstimaciones/CasosEstimaciones';

export default class CasosEstimaciones extends Component {
  render() {
    return (
      <Dashboard>
        <CasosEstimacionesComponent/>
      </Dashboard>
    );
  }
}
