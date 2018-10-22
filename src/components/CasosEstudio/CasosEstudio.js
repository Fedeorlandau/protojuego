import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class CasosEstudioComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="casosEstudio-container">
        <h1>Casos de estudio</h1>
        <div className="linksCasosEstudio" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vQsNZy8mlUevofuxmCqeQPUtCSofLSPmp8v7n6MGBl62bPDlhHM1Wzrok-YFp5Pkik0GJCbCJMReV7d/pub?embedded=true")}>Sobreviviendo a la implementacion de SAP en un hospital</a>
        </div>
        <div className="linksCasosEstudio" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vTiwXOyvDBvQoNQTtq-IwvH9zoyDua17Rgj6jraRGwM_6SyrAwmXKakxMJsT66CDc2Z6OlWS9XMTtrz/pub?embedded=true")}>Diamonds in the Data Mine</a>
        </div>
        <div className="linksCasosEstudio" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vQwjEhe0gX5erS-smpCNSYBOaHGDKZnbglwgPWjiXhupqc6xzQPuPLEaHDrSvMmN_gF-zB7Vyak0wl-/pub?embedded=true")}>Sintesis Teradyne</a>
        </div>
        <div className="linksCasosEstudio" id="ce4">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vT2dEWAMGIhQK9KuhRDhDlZf2uXO95a_HSzT0K2aKp2w7xvG_pM9IVr6DAZJAqlrwf78QN6OZYEchn2/pub?embedded=true")}>Minas cupríferas de Codelco</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}