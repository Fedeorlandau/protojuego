import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import ModalComponent from 'components/GestionProyectos/GestionProyectosModal';

export default class GestionProyectosComponent extends Component {
 
  constructor(props) {
    super(props); 
    this.state = {
      titulo: "",
      urlPaper: "",
      urlResumen: "",
      urlRelaciones: "",
    }; 
  }
   cargarPaper(titulo, urlPaper, urlResumen, urlRelaciones){
    document.getElementById("divContenidoPaper").style.display = "block";
    document.getElementById("botonesModales").style.display = "block";
    this.setState({
      titulo,
      urlPaper,
      urlResumen,
      urlRelaciones
    });
  }
 
  render() {
    return (
      <div className="gestionProyectos-container">
        <h1>Resumenes de Papers</h1>
        <br></br>
        <div class="row">
          <div class="col-sm-6">
            <div className="linksGestionProyectos" id="paper1">
                <a id="gestionProyectosLink1" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink1").text, 
                    "https://docs.google.com/document/d/e/2PACX-1vQiGSnrxOxtQ-Iqvki270IiP0q--KixRxMIlt2Jl6491aKEYdL5zfeS85mCHd2lEwkFDRUF_fppFvK-/pub?embedded=true", 
                    "https://docs.google.com/document/d/e/2PACX-1vTl1mJ2RoEspY02DVgxOBtA00HPl8tdyyxB1778NKIg7V5epLbImSUuJOYq9WfzdtsKy4JEZlcV7smb/pub?embedded=true",
                    "https://docs.google.com/document/d/e/2PACX-1vTptbF9fbP5H1W1SfAvn_txCtAiO4D-QjfjvdYzshOg-XSPNfFBI-Yu-zpknDgOCKeesXChLnNMstwh/pub?embedded=true" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper2">
                <a id="gestionProyectosLink2" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink2").text, 
                    "https://docs.google.com/document/d/e/2PACX-1vS-vLscenZwSNWQ1CaKHOTylWy4hQLzbSu9uM3utepRYX7Jruea8ESXCj5MeOz1F0RrIJzC_35kcXz0/pub?embedded=true", 
                    "https://docs.google.com/document/d/e/2PACX-1vTuysyZSoiDidzVrOlXbZO2z7J3-mGTxaPL0FMt7m-IHVb16NgRezKke4mVJn5ocl1oBN6PYR7hfoeR/pub?embedded=true",
                    "https://docs.google.com/document/d/e/2PACX-1vTLGTf930ihOY8C--vtFPBTB1fMWQJMfVGbhCJoaLDrHkz9CDQoAFq73NTBJ2E1wktXM23Sv3ipOXJp/pub?embedded=true" )}>
                    How AI could revolutionize project management
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper3">
                <a id="gestionProyectosLink3" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink3").text, 
                    "https://docs.google.com/document/d/e/2PACX-1vQbkz2MWyaT0kRhQKlp4uYbIClIKecQrHV6Snj7NhnmIsFXfYMdlvJzsEWH9y1LlssBCHRTF_GsDzuN/pub?embedded=true", 
                    "https://docs.google.com/document/d/e/2PACX-1vRtVQ0JF4tI4FbCDV87gSam8mpz0DNd7Z6yJgB8WQVdPKlkquJFsEnXzPgg2oY_osbPF0vAINkFJ6Rq/pub?embedded=true",
                    "https://docs.google.com/document/d/e/2PACX-1vR6hZeHiE26WuPGuj1d59fYbLZfWK5JyJbjdasKtOejxUIK5J2AQEwMxeDbgoYLLXSape0RWYIFinck/pub?embedded=true" )}>
                    Pnl  en la toma de requerimientos como técnica para los framework CMMI® e ISO/IEC IS 15504
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper4">
                <a id="gestionProyectosLink4" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink4").text, 
                    "https://docs.google.com/document/d/e/2PACX-1vQyOSMQBobPHan478uDrJUZAH9IrGgzIswxMs5OIC-vF61Ggc7LgOVvekefYTP4V9DWnhzRGl-w8FKd/pub?embedded=true", 
                    "https://docs.google.com/document/d/e/2PACX-1vQwaiNsxwaUkViGQzn0Ahx89DfcroBYirxQJaKGs1O9d-yasPONI3JCdw7mwd5-6y1prQJ_UoN-AOBE/pub?embedded=true",
                    "https://docs.google.com/document/d/e/2PACX-1vQBPJsjd0dxe9onPqNSjwvuxX2F-nhc9EybQ42t9nDro80T1oAdT7MUK_bI_4eEYemK9GIxg2zItLbE/pub?embedded=true" )}>
                    Neurotecnologías: la necesidad de un compromiso ético en su implementación
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper5">
                <a id="gestionProyectosLink5" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink5").text, 
                    "", 
                    "",
                    "" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper6">
                <a id="gestionProyectosLink6" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink6").text, 
                    "", 
                    "",
                    "" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper7">
                <a id="gestionProyectosLink7" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink7").text, 
                    "", 
                    "",
                    "" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper8">
                <a id="gestionProyectosLink8" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink8").text, 
                    "", 
                    "",
                    "" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            <div className="linksGestionProyectos" id="paper9">
                <a id="gestionProyectosLink9" onClick={() => 
                  this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                    document.getElementById("gestionProyectosLink9").text, 
                    "", 
                    "",
                    "" )}>
                    Business intelligence in project portfolios
                </a>
            </div>
            </div>
            <div style={{display:'none'}} id="botonesModales" class="col-sm-2">
                <ModalComponent id="modalResumen" buttonLabel="Ver resumen" modalContent={this.state.urlResumen}/>
                <ModalComponent id="modalRelaciones" buttonLabel="Ver relaciones" modalContent={this.state.urlRelaciones}/>
            </div>
        </div>
        <br></br>
        <div id="divContenidoPaper" style={{display:'none'}}>
            <h4 >{this.state.titulo} </h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe title="paper" src={this.state.urlPaper} id="paper" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
        </div>	       
      </div> 
    );
  }
}
