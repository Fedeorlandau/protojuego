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
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vRvAfgh7olCTHZKiKdSne_M5PqGXK0KreujeIMGuyhLRRdSpUkKMzHhBVTfxtcmwTM2deTE0n74pAEW/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Metáforas</a>
        </div>
        <div className="linksCarreras" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTVCDndsHQJKjJ7XzymP8HdnTeXhuT7yeguIrOPTVz_SWYxOFr3vbz2s1tYdaxK5W_FCFb1MmTlIsp6/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Las nueve metáforas</a>
        </div>
        <div className="linksCarreras" id="ce4">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTmFpF3BpLnl4qi5HUKnFFWCWv07uD2nS3A68Cf-nGIoIfGVxhAckUm3MyZnLgf_IEMjIZDTZq-frpG/embed?start=false&loop=false&delayms=3000")}>Images of carrer: Nine key metaphors. Conclusiones</a>
        </div>
        <div className="linksCarreras" id="ce5">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vRLBLPj5d72zfNpJxBTCTnygV-MnXeEkemQAVoRCTqPAw5lIZmvhf2e5zdEy4dgjnMTxxB4gVy5RcGW/embed?start=false&loop=false&delayms=3000")}>Educación Formal, No Formal e Informal.</a>
        </div>
        <div className="linksCarreras" id="ce6">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vRQVM6y6YZbQ3apS3PYrxYuoxOeTMSOj7wOKBZO83IX43No-K7bkYcIXr2-Yaj-pTZ4sQI7asS7o32F/embed?start=false&loop=false&delayms=3000")}>Las Técnicas de los trabajadores informáticos</a>
        </div>
        <div className="linksCarreras" id="ce7">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vRLBLPj5d72zfNpJxBTCTnygV-MnXeEkemQAVoRCTqPAw5lIZmvhf2e5zdEy4dgjnMTxxB4gVy5RcGW/embed?start=false&loop=false&delayms=3000")}>¿De qué vamos a trabajar en el 2030?</a>
        </div>
        <div className="linksCarreras" id="ce8">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vQ07-O1eH3F1XXBo59EtJxXCrT2YWND_oNtB1vxwrj6W7GNdDrG37aUBKUlsLbDWpVvfch-SlCydeH7/embed?start=false&loop=false&delayms=3000")}>La era de las profesiones híbridas</a>
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