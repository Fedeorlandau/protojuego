import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import AplicacionesGQM from 'components/AplicacionGQM/AplicacionGQM';

export default class AplicacionGQMContainer extends Component {
  render() {
    return (
      <Dashboard>
        <AplicacionesGQM/>
      </Dashboard>
    );
  }
}