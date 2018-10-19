import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class PlanesComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="casosEstudio-container">
        <h1>Planes de desarrollo</h1>
        <div className="linksCasosEstudio" id="ce0">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vQk777qcsf0yv1g3uXz-3eAVDuheU_UlIVGtHdw_6hWqYrj_D4KfgmkZhLAw5u992rLcWtAqCfDRWKZ/pub?embedded=true")}>¿En qué consiste un Plan de desarrollo de Software?</a>
        </div>
        <div className="linksCasosEstudio" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vTgFZFSjwDykkC1P7zBUXrpoVptbHyaZqY3einONTcJ65vrDQN_UGZUD2rPl-UzAjM3nmjMYjxl2RXi/pub?embedded=true")}>Plan de Desarrollo de Teradyne</a>
        </div>
        <div className="linksCasosEstudio" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSRrKvM2-zB76lXeHW1y3kkT1W2fj44qsAWuqxMcm7OBZQGbJ9uFoPkm9mGYtPA30gwpx6MUy212Emz/pub?embedded=true")}>Plan de Desarrollo de Fundación Valle del Lili</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}
