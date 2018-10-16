import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class GestionProyectosComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="gestionProyectos-container">
        <h1>Papers - Gestión de Proyectos PMBOK</h1>
        <div className="linksGestionProyectos" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vQiGSnrxOxtQ-Iqvki270IiP0q--KixRxMIlt2Jl6491aKEYdL5zfeS85mCHd2lEwkFDRUF_fppFvK-/pub?embedded=true")}>Business intelligence in project portfolios</a>
        </div>
        <div className="linksGestionProyectos" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vSJUUPnDX5EgupZaL5KsYt8Ybqsts5sgx6ZF5gJIMpnYkurlBpQxaC53Da2OvYS_aIZEGcc1SqowDOQ/pub?embedded=true")}>Using emotional intelligence to improve project performance</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}
