import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class EstimacionesComponent extends Component {

  mostrarIframe(contenido){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("frameContenido").src = contenido;
  }

  render() {
    return (
      <div className="estimaciones-container">
        <h1>Estimaciones</h1>
        <div className="linksEstimaciones" id="ce1">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vQX28kbxnv1-7SSLTxggfl0GPEFMKnYYVyqiQHt56aw-5RCq4RhBPOm5RyxuRcXEppEiy9hXd9byAeV/embed?start=false&loop=false&delayms=3000")}>Consideraciones generales</a>
        </div>
        <div className="linksEstimaciones" id="ce2">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vQeyoXq5r0xTs3C-Cg88qgEmlcyE-w4xgzihJmXx39Zj_pk8NsVgbhxsQN4whIaGq3ltxaIiaWFbLGd/embed?start=false&loop=false&delayms=3000")}>El proceso de estimación</a>
        </div>
        <div className="linksEstimaciones" id="ce3">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vR28vBhD0TkVrJ8QnATfUpLFA8q5kvU8Nghrmm_R4q3CrXQKx4Qei6RC0bCt2fM3uNSrCoBhPiWs1Yg/embed?start=false&loop=false&delayms=3000")}>Refinamiento de las estimaciones</a>
        </div>
        <div className="linksEstimaciones" id="ce4">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTd_OfWbuH5a3ZX9PfCkyJAKvm2kgjNydk8UYtZaLwSDj8wDQsmc5xfFy-d7kocGaXmjVsLPL3pMFL9/embed?start=false&loop=false&delayms=3000")}>Estimación del esfuerzo basado en casos de uso: Clase 1</a>
        </div>
        <div className="linksEstimaciones" id="ce5">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vQmrem-TWtlW04xZblS7CtjxvvF5Oa_hRmwmLCpH03LJIpgZ4qtP9DxZIkVc6qrI_AucjC1q5dQUjx8/embed?start=false&loop=false&delayms=3000")}>Estimación del esfuerzo basado en casos de uso: Clase 2: El método Cocomo II</a>
        </div>
        <div className="linksEstimaciones" id="ce6">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vTEnTKZ3_YuTueFZTrPpLbe1o1g8dPLWa8BUofgLBr21B_W_LylzJyRRf72fDodQXixUUJB0t-Zh8MN/embed?start=false&loop=false&delayms=3000")}>Estimación del esfuerzo basado en casos de uso: Clase 3: Puntos de caso de uso</a>
        </div>
        <div className="linksEstimaciones" id="ce7">
          <a onClick={() => this.mostrarIframe("https://docs.google.com/presentation/d/e/2PACX-1vSbHxoLKmv2H7XVwMkdKDcR2M18YU7mxbn_3W5PEDYsYtUnH38TcoWB6NETu5R9ttliHRNDaZg-unos/embed?start=false&loop=false&delayms=3000")}>Puntos de función en la estimación y evaluación en el proceso de software</a>
        </div>
        <br></br>
        <div id="divContenido" style={{display:'none'}}>
          <iframe frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="yes" id="frameContenido" title="Carreras"></iframe>
        </div>
        <div className="quiz-button">
          <Button onClick={() =>  history.push(ROUTES.ESTIMACIONES_QUIZ)}>Realizar QUIZ</Button>
        </div>
      </div>
    );
  }
}