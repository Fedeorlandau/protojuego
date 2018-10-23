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
                        "https://docs.google.com/document/d/e/2PACX-1vSMXWM1xt2Il-Lg6TbWCZwHYGV3gkES_RUFpD9BfJnoLdWwgAMjG6asNNUIxnIIIm8Z4r1Jxj6HlsL1/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vQBPJsjd0dxe9onPqNSjwvuxX2F-nhc9EybQ42t9nDro80T1oAdT7MUK_bI_4eEYemK9GIxg2zItLbE/pub?embedded=true" )}>
                        Wearable technology to understand humans (Neurotecnologías, la necesidad de un compromiso ético en su implementación)
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper7">
                <a id="gestionProyectosLink7" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink7").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vQbkz2MWyaT0kRhQKlp4uYbIClIKecQrHV6Snj7NhnmIsFXfYMdlvJzsEWH9y1LlssBCHRTF_GsDzuN/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vRtVQ0JF4tI4FbCDV87gSam8mpz0DNd7Z6yJgB8WQVdPKlkquJFsEnXzPgg2oY_osbPF0vAINkFJ6Rq/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vR6hZeHiE26WuPGuj1d59fYbLZfWK5JyJbjdasKtOejxUIK5J2AQEwMxeDbgoYLLXSape0RWYIFinck/pub?embedded=true" )}>
                        PNL EN LA TOMA DE REQUERIMIENTOS
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper8">
                <a id="gestionProyectosLink8" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink8").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vS-vLscenZwSNWQ1CaKHOTylWy4hQLzbSu9uM3utepRYX7Jruea8ESXCj5MeOz1F0RrIJzC_35kcXz0/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vTuysyZSoiDidzVrOlXbZO2z7J3-mGTxaPL0FMt7m-IHVb16NgRezKke4mVJn5ocl1oBN6PYR7hfoeR/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vTLGTf930ihOY8C--vtFPBTB1fMWQJMfVGbhCJoaLDrHkz9CDQoAFq73NTBJ2E1wktXM23Sv3ipOXJp/pub?embedded=true" )}>
                        How AI could revolutionize project management
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper9">
                <a id="gestionProyectosLink9" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink9").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vS0lEB2DNLXWIXkqnq0iVBHGyfjWMwrOHGNdbC1ZC_uEgCf13Dczfzad7_ca6YF_qJfxUTS5_mnWXZ7/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vSnYRrjyLLIX6G_nGhzkxj-SsmhXwT6mhOaSODsXKBGIxBKgxFmekSVFNGMP28h4qdaV7yyR0L0z3-L/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vQBPJsjd0dxe9onPqNSjwvuxX2F-nhc9EybQ42t9nDro80T1oAdT7MUK_bI_4eEYemK9GIxg2zItLbE/pub?embedded=true" )}>
                        Aprendizaje Organizacional y trabajo en equipos a partir de los proyectos de Ciencia e Innovación Tecnológica
                    </a>
                </div>
                <div className="linksGestionProyectos" id="paper10">
                <a id="gestionProyectosLink10" onClick={() => 
                      this.cargarPaper(//titulo, urlPaper, UrlResumen, urlRelaciones
                        document.getElementById("gestionProyectosLink10").text, 
                        "https://docs.google.com/document/d/e/2PACX-1vRW7P_l4rFyKhWw6NY4Sfh7_WL4kxB6sZ2WHQE7iGNwHfJrZ8DCVKYNgIlCC_J4tcEz302asSzoGFoM/pub?embedded=true", 
                        "https://docs.google.com/document/d/e/2PACX-1vRoYVVgjZ7LMsT4Bjf37gCGsufWdarVJj1_PX5D0qY_ws4JyoYB_tSQsI1_IFx1pscGoEf5jk_riHRm/pub?embedded=true",
                        "https://docs.google.com/document/d/e/2PACX-1vTyXaN3kNy4Pag2meV-kLiVMZp_sERc_ZD4JhIjycmN4KFMArLfj_SmnlK2Dv-xgRFbfv5rzXESNwva/pub?embedded=true" )}>
                        The Next-Generation Workforce and Project Management
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
