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
        <h1>Aplicaciones de GQM</h1>
        <div className="linksAplicacionGQM" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vRavulcTbuUMJJ3pwaAzfzWTYRVwVwi_3UB2Plw9nBISTPmTP7J500d-ui1kn62GvqSJC0ePqKTWM-4/pub?embedded=true")}>Caso FLV</a>
        </div>
        <div className="linksAplicacionGQM" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vRed7hMiAjT_aXrMiExjLVTNvIizgSLNyYuyI_QzWf3FAa_yzppi6bDbE6zPq-1PLRsQtBmgU3_SIbw/pub?embedded=true")}>Caso Quateams CRM</a>
        </div>
        <div className="linksAplicacionGQM" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/document/d/e/2PACX-1vRFGvN64EMgz8qAObys__DdZ6XS7VZZUod23F74KzISLiZwS8bRiDVbX43AMFOXOTF1k3WKtiFK4SGi/pub?embedded=true")}>Caso Teradyne</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe scrolling="yes" id="frameContenido" title="Doc2"></iframe>
        </div>
      </div>
    );
  }
}
