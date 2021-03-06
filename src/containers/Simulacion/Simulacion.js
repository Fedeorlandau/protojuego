import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import SimulacionComponent from 'components/Simulacion/Simulacion';
import './style.css';

export default class Simulacion extends Component {

  render() {
    return (
      <Dashboard>
        <SimulacionComponent total={10000} tareas={50} logro="Simulacion"/>
      </Dashboard>
    );
  }
}
