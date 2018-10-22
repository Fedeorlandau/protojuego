import React, { Component } from 'react'; 
import Rules from 'components/Rules/Rules'; 
import Dashboard from 'containers/Dashboard/Dashboard';
import './style.css';  

export default class RulesContainer extends Component {

  render() {
    return (
      <Dashboard>
        <Rules />
      </Dashboard>
    );
  }
}
