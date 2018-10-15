import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import PropuestasLudicas from 'components/PropuestasLudicas/PropuestasLudicas';
import './style.css';

export default class PropuestasLudicasContainer extends Component {

  render() {
    return (
      <Dashboard>
        <PropuestasLudicas/>
      </Dashboard>
    );
  }
}
