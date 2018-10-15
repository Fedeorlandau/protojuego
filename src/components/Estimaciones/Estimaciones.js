import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class EstimacionesComponent extends Component {
  
  render() {
    return (
      <div>
          <h1>Estimaciones</h1> 
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vSdOA5lLUAn1pxJTmlcFv6y2B3M8FEsTlIRUnkIyquT5UjdgeBCiOylIfGt24W-2TEFv8JDNt4XqsIf/pub?embedded=true"></iframe>
        <br/>
        <div className="quiz-button">
          <Button onClick={() =>  history.push(ROUTES.METRICAS_SOFTWARE_QUIZ)}>Realizar QUIZ</Button>
        </div>
      </div>
    );
  }
}