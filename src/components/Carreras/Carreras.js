import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class CarrerasComponent extends Component {
  
  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="carreras-container">
        <h1>Carreras y Estrategias de los Trabajos Informáticos</h1>
        <div className="linksCarreras" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vSjfKOHEL63ukEH4yZ6OLjsHoAjcl7crHA9k6ZQhrMR83id3uM7sgTnll25mumI1po9kbPqmh_UoUsf/embed?start=false&loop=false&delayms=3000")}>Códigos Generizados</a>
        </div>
        <div className="linksCarreras" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vRvAfgh7olCTHZKiKdSne_M5PqGXK0KreujeIMGuyhLRRdSpUkKMzHhBVTfxtcmwTM2deTE0n74pAEW/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Clase 1 Metáforas</a>
        </div>
        <div className="linksCarreras" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTVCDndsHQJKjJ7XzymP8HdnTeXhuT7yeguIrOPTVz_SWYxOFr3vbz2s1tYdaxK5W_FCFb1MmTlIsp6/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Clase 2 Las nueve metáforas</a>
        </div>
        <div className="linksCarreras" id="ce4">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTmFpF3BpLnl4qi5HUKnFFWCWv07uD2nS3A68Cf-nGIoIfGVxhAckUm3MyZnLgf_IEMjIZDTZq-frpG/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Clase 3 Conclusiones</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="yes" id="frameContenido" title="Carreras"></iframe>
        </div>
        <div className="quiz-button">
          <Button onClick={() =>  history.push(ROUTES.CARRERAS_QUIZ)}>Realizar QUIZ</Button>
        </div>
      </div>
    );
  }
}