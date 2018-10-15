import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import Carreras from 'components/Carreras/Carreras';

export default class CarrerasContainer extends Component {
  render() {
    return (
      <Dashboard>
        <Carreras />
      </Dashboard>
    );
  }
}
