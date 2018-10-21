import React, { Component } from 'react'; 
import Dificultades from 'components/Dificultades/Dificultades'; 
import Dashboard from 'containers/Dashboard/Dashboard';
import './style.css';  

export default class DificultadesContainer extends Component {

  render() {
    return (
      <Dashboard>
        <Dificultades />
      </Dashboard>
    );
  }
}
