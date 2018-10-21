import React, { Component } from 'react'; 
import Quizes from 'components/Quizes/Quizes'; 
import Dashboard from 'containers/Dashboard/Dashboard';
import './style.css';  

export default class QuizesContainer extends Component {

  render() {
    return (
      <Dashboard>
        <Quizes />
      </Dashboard>
    );
  }
}
