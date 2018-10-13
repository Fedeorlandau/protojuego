import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button, Row, Col } from 'reactstrap';

export default class CasosEstudioComponent extends Component {
  render() {
    return (
      <div className="casosEstudio-container">
        <h1>Casos de estudio</h1>
        <div id="ce1">
          <h4>Sobreviviendo a la implementacion de SAP en un hospital</h4>
          <iframe scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQsNZy8mlUevofuxmCqeQPUtCSofLSPmp8v7n6MGBl62bPDlhHM1Wzrok-YFp5Pkik0GJCbCJMReV7d/pub?embedded=true"></iframe>
        </div>
        <div id="ce2">
          <h4>Diamonds in the Data Mine</h4>
          <iframe scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vTiwXOyvDBvQoNQTtq-IwvH9zoyDua17Rgj6jraRGwM_6SyrAwmXKakxMJsT66CDc2Z6OlWS9XMTtrz/pub?embedded=true"></iframe>        </div>
        <div id="ce3">
          <h4>Sintesis Teradyne</h4>
          <iframe scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vQwjEhe0gX5erS-smpCNSYBOaHGDKZnbglwgPWjiXhupqc6xzQPuPLEaHDrSvMmN_gF-zB7Vyak0wl-/pub?embedded=true"></iframe>        </div>
        <div id="ce4">
          <h4>Minas cupríferas de Codelco</h4>
          <iframe scrolling="yes" src="https://docs.google.com/document/d/e/2PACX-1vT2dEWAMGIhQK9KuhRDhDlZf2uXO95a_HSzT0K2aKp2w7xvG_pM9IVr6DAZJAqlrwf78QN6OZYEchn2/pub?embedded=true"></iframe>        </div>
      </div>
    );
  }
}