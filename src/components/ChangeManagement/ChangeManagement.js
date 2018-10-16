import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class ChangeManagementComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="changeManagement-container">
        <h1>Casos de Estudio donde se gestionó el cambio</h1>
        <div className="linksChangeManagement" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vQvSCoSg9Y6lreWVVpwDwYIZG5Ufl8nnzXN6ETFOSSBMN5n0Z-ZBT4fTICLQ427u-kNOY-iKGt7DYHq/pub?embedded=true")}>Cisco</a>
        </div>
        <div className="linksChangeManagement" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vTKTuY_5KJXZ-A4jDxU6dTCX_8bw1iDU5UfS51My1VHGjIZkDtnWqizTxRpdMlQvyfCDTHK5vdIk4XV/pub?embedded=true")}>Codelco</a>
        </div>
        <div className="linksChangeManagement" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vR7H-khLgeXn32QL_7SuMxk0vegx6JB49grGNlZWRYwnQAp6RTQJlDfFl_cLkyVIOJCHrWhGV7pdhws/pub?embedded=true")}>Harrah’s</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}