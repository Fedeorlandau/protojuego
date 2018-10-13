import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import CasosEstudioComponent from 'components/CasosEstudio/CasosEstudio';

export default class CasosEstudio extends Component {
  render() {
    return (
      <Dashboard>
        <CasosEstudioComponent/>
      </Dashboard>
    );
  }
}
