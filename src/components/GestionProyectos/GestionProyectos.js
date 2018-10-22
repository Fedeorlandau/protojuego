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

  cargarPaper(titulo, paper, resumen, relaciones){
    document.getElementById("divContenidoPaper").style.display = "block";
    document.getElementById("botonesModales").style.display = "block";
    this.setState({ titulo: titulo}); 
    //this.state.titulo= titulo;
    this.setState({ urlPaper: paper});
    //this.state.urlPaper= paper;
    this.setState({ urlResumen: resumen});
    //this.state.urlResumen = resumen;
    this.setState({ urlRelaciones: relaciones});
    //this.state.urlRelaciones = relaciones; 
  }

  updateUrl(newUrl){
    
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
                    <a id="gestionProyectosLink2" onClick={() => this.cargarPaper(document.getElementById("gestionProyectosLink2").text, "https://www.youtube.com/embed/rrkrvAUbU9Y", "https://docs.google.com/document/d/e/2PACX-1vTiFjj-kXPgF-hR3ll-kdev4icEIIXLODp33x_zmgQur8rs7UkInzilVmaKsWcoY6B6i-dpnp6bifu-/pub?embedded=true", "https://docs.google.com/document/d/e/2PACX-1vRsxQ0IfHTfiIFYMBFFywoKbbxJbiAd0rEixnbbY5OtKOHTFxuoxrXAPZvcc1LbMZqtiPyBARj80zSt/pub?embedded=true" )}>
                    paper 2
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