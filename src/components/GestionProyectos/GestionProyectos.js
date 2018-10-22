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
                <a id="gestionProyectosLink2" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink2").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vT2k91xlMSOcQ7tLF0tEK0XKWcfkLqhoCZCnoIfZRGvFN7zRUUN_qwQIzbk7d6PZyrc5eWmKGol14se/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vR_-EHkveg4ZdGKVnXdrMSO2-X5e12ka8Vgs61AdxuLZCalfaRfgucuw04AG43oRo5Nn3vMAG7fJa2q/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vQC_g3YhEgG4ZcS7PSBjXeD5HaTlCek0G7EETI2Cdx5__HqxXdZiTk8bF6Qp9jt2hXhYfBeS6Y0nKT_/pub?embedded=true" )}>
                        Leading multigenerational projects and surviving
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper3">
                <a id="gestionProyectosLink3" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink3").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vS8zcYplM8jdYMBVEDEjyCicQp6Xh-XBOmwAnTxJpG-B0Eq83IwmtdkJ99TjkT6RkKnApzAcJB5RHFH/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vTJvVuDDq-lmGF4wZENB3hQKer86-RxEoSzB16XkcOX13yc6su_NCfh3yDKgLxzhLFteB7jemS5stT7/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vRsxQ0IfHTfiIFYMBFFywoKbbxJbiAd0rEixnbbY5OtKOHTFxuoxrXAPZvcc1LbMZqtiPyBARj80zSt/pub?embedded=true" )}>
                        Agile Software Development: The Business of Innovation
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper4">
                <a id="gestionProyectosLink4" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink4").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vSJUUPnDX5EgupZaL5KsYt8Ybqsts5sgx6ZF5gJIMpnYkurlBpQxaC53Da2OvYS_aIZEGcc1SqowDOQ/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vRjGSRrj04tD4K5hyow05e-TGLyf3jroHGpu6Tfv_F9B7gsFoXwzor6zPEzZVAngEt_42ZE7oxlj2_o/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vQEMBHUk5N2kG87kmJL3GNHxUgKIKmHDO7UcTSrLrvn9mD8ONAz4LzwuZ4OtPSwOtZ3tvjrjg83FHcP/pub?embedded=true" )}>
                        Using emotional intelligence to improve project performance
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper5">
                <a id="gestionProyectosLink5" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink5").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vT9y67HyPudMTA2dsxW5FgtQHTWnGAQLm04Y67ha-2AUKk6VsTb7xHzjQKaIUvm8vX9Kotk0EPS0q_O/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vS4zUym_zI-4T6cyERkF_qq2VT7qqjhDETD4DR1DSzjbBxIx4sM_Ts3isTQGGxtLXJbrgYL_yWgtaM-/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vTrhv03_SAaWtGyB6l8t-qzf5eLJRCRiWhvlRZerl_7gWZ9HZD90-sHnUI_EgxM8Dd2K0UITsDBYKUN/pub?embedded=true" )}>
                        Managing multicultural teams (CÓMO GERENCIAR EQUIPOS MULTICULTURALES)
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper6">
                <a id="gestionProyectosLink6" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink6").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vQyOSMQBobPHan478uDrJUZAH9IrGgzIswxMs5OIC-vF61Ggc7LgOVvekefYTP4V9DWnhzRGl-w8FKd/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vQwaiNsxwaUkViGQzn0Ahx89DfcroBYirxQJaKGs1O9d-yasPONI3JCdw7mwd5-6y1prQJ_UoN-AOBE/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vQBPJsjd0dxe9onPqNSjwvuxX2F-nhc9EybQ42t9nDro80T1oAdT7MUK_bI_4eEYemK9GIxg2zItLbE/pub?embedded=true" )}>
                        Wearable technology to understand humans (Neurotecnologías, la necesidad de un compromiso ético en su implementación)
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