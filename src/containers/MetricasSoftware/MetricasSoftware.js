import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import MetricasSoftware from 'components/MetricasSoftware/MetricasSoftware';

export default class MetricasSoftwareContainer extends Component {
  render() {
    return (
      <Dashboard>
        <MetricasSoftware/>
      </Dashboard>
    );
  }
}
