import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button } from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class PropuestasLudicasComponent extends Component {
  
  render() {
    return (
      <div>
          <h1>Propuestas Ludicas</h1> 
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ3VlMjUmn7pICbZA-G4MBYLgudU6ED_e0zApEHnhjy9krzpABBA8pwz7CkpNAqaN_9Rc6VV8coEi8m/pub?embedded=true"></iframe>
        <br/> 
      </div>
    );
  }
}