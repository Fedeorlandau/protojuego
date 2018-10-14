import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import Diploma from 'components/Diploma/Diploma';

export default class DiplomaContainer extends Component {
  render() {
    return (
      <Dashboard>
        <Diploma/>
      </Dashboard>
    );
  }
}
