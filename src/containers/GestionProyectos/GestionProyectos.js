import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import GestionProyectos from 'components/GestionProyectos/GestionProyectos';

export default class GestionProyectosContainer extends Component {
  render() {
    return (
      <Dashboard>
        <GestionProyectos />
      </Dashboard>
    );
  }
}