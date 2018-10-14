import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import Levels from 'components/Levels/Levels';
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
