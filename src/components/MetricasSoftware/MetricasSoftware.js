import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button } from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class GestionCambioComponent extends Component {
  
  render() {
    return (
      <div>
          <h1>Metricas de software</h1> 
            <iframe title="Metricas" scrolling="no" src="https://docs.google.com/presentation/d/e/2PACX-1vSgcucbvF_PLeWAv0Xv6cnHIvrN2qoDX-xDuAOtE-Fb5yAmXuXf-og8Wa4VXcKkSKYxUlAZiD-4vKg5/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        <br/>
        <div className="quiz-button">
          <Button onClick={() =>  history.push(ROUTES.METRICAS_SOFTWARE_QUIZ)}>Realizar QUIZ</Button>
        </div>
      </div>
    );
  }
}