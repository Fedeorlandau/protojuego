import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class CasosEstimacionesComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="casosEstimaciones-container">
        <h1>Casos de estudio</h1>
        <div className="linksCasosEstimaciones" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSdOA5lLUAn1pxJTmlcFv6y2B3M8FEsTlIRUnkIyquT5UjdgeBCiOylIfGt24W-2TEFv8JDNt4XqsIf/pub?embedded=true")}>Caso Chilquinta</a>
        </div>
        <div className="linksCasosEstimaciones" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vTcLb_Xhx2dX2gc9INJEIrimUWg0kKyJdlqUUEgcN8Vfke52vXf_68P5c9DfoaipRrNR43fA5vJA6xm/pub?embedded=true")}>Caso FVL (Hospital Fundación Valle del Lili)</a>
        </div>
        <div className="linksCasosEstimaciones" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSyLoRW3DjHrLa8HJB78EA48uZcuqHnSPAAyhPNRe4CruK-4cSzUuCYFpNP1XY5EYxfvDFlnl1IAFXz/pub?embedded=true")}>Caso Teradyne</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}