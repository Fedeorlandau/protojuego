import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import GestionCambio from 'components/GestionCambio/GestionCambio';

export default class GestionCambioContainer extends Component {
  render() {
    return (
      <Dashboard>
        <GestionCambio/>
      </Dashboard>
    );
  }
}
