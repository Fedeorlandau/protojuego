import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class AplicacionGQMComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="aplicacionGQM-container">
        <h1>Planes de desarrollo</h1>
        <div className="linksAplicacionGQM" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSX6VT-GC4xr1KPmZf2a2dosVCAaFx8j-AiRc9LQiPTUbDXlRSB0TVU5GQzunAqHdWi5jg69mBGbE1Z/pub?embedded=true")}>Caso 1</a>
        </div>
        <div className="linksAplicacionGQM" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vRuE4i63qtzvbwwY4Xz46StfC7cO5Ws2J0NbUobSzeMNonrK_myjL9dzSYDGC7DXn3f7deyKhiyNttt/pub?embedded=true")}>Caso 2</a>
        </div>
        <div className="linksAplicacionGQM" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSmSO-CLXUIr0jbcOD6pBwEijGgQgJp0CsiyL6T4Vbg6OscebFPo-W77FVkcSiDCU88v7sd333cFgVq/pub?embedded=true")}>Caso 3</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}
