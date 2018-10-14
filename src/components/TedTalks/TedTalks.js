import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class TedTalksComponent extends Component {
   
  cargarTedTalk(titulo, video, resumen){
    document.getElementById("divContenido").style.display = "block";
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("frTalk").src = video;
    document.getElementById("frResumen").src = resumen;
  }

  render() {
    return (
      <div className="tedTalks-container">
        <h1>Ted Talks</h1>

        <br></br>

        <div class="row">
            <div class="col-sm-6">
                <div className="linksTedTalks" id="tedTalk1">
                    <a id="linkTedTalk1" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk1").text, "https://www.youtube.com/embed/4bcB5FJq80Q", "https://docs.google.com/document/d/e/2PACX-1vT_ws_1DlIp-2XqxLCHuuUq1OLNmw_Z9sNmswn7W5kSI9NzISapw7dmyQ6IJwlS0hccXCGfpCPRZIP-/pub?embedded=true" )}>Simon Sinek: How great leaders inspire action</a>
                </div>
                <div className="linksTedTalks" id="tedTalk2">
                    <a id="linkTedTalk2" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk2").text, "https://www.youtube.com/embed/rrkrvAUbU9Y", "https://docs.google.com/document/d/e/2PACX-1vTiFjj-kXPgF-hR3ll-kdev4icEIIXLODp33x_zmgQur8rs7UkInzilVmaKsWcoY6B6i-dpnp6bifu-/pub?embedded=true" )}>Dan Pink: The puzzle of motivation</a>
                </div>
                <div className="linksTedTalks" id="tedTalk3">
                    <a id="linkTedTalk3" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk3").text, "https://www.youtube.com/embed/8jPQjjsBbIc", "https://docs.google.com/document/d/e/2PACX-1vRLQLaiLKnSsc8H6FXHzuORRxR9k_C7m2JwJUBFhCKtY_f3ENAEP4lRsIktc8WfbVia1p3r4V4TgrAV/pub?embedded=true" )}>Daniel Levitin: How to stay calm when you know you’ll be stressed</a>
                </div>
                <div className="linksTedTalks" id="tedTalk4">
                    <a id="linkTedTalk4" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk4").text, "https://www.youtube.com/embed/arj7oStGLkU", "https://docs.google.com/document/d/e/2PACX-1vTgnqS51f8TN5zOTwh6qz1-izUjlW1ToAmpBWjG6Q7XcnQ7mBFSmfkeoLaAzhB7-O-_oUqiBK_j-TB5/pub?embedded=true" )}>Tim Urban: Inside the mind of a master procrastinator</a>
                </div>
                <div className="linksTedTalks" id="tedTalk5">
                    <a id="linkTedTalk5" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk5").text, "https://www.youtube.com/embed/c0KYU2j0TM4", "https://docs.google.com/document/d/e/2PACX-1vTsC1S09Fm_qzDmgRAzobrOLaU6Kcey1mJ8ipSJwg7-NGs3gOb7lb33FXWi-QeTdVgzCrMwW-W_tsi5/pub?embedded=true" )}>Susan Cain: The power of introverts</a>
                </div>
                <div className="linksTedTalks" id="tedTalk6">
                    <a id="linkTedTalk6" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk6").text, "https://www.youtube.com/embed/Hc6yi_FtoNo", "https://docs.google.com/document/d/e/2PACX-1vSEbplphS6RL8cf1hmtCO6sN1PkcAR_bfHyXQNljaoh9QhzFugc8MOZSWq_J3wbXI3duLcsUFfhrTjJ/pub?embedded=true" )}>William Ury: The walk from "no" to "yes"</a>
                </div>
                <div className="linksTedTalks" id="tedTalk7">
                    <a id="linkTedTalk7" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk7").text, "https://www.youtube.com/embed/R9g3Q-qvtss", "https://docs.google.com/document/d/e/2PACX-1vTLuZO0u5XQcwjixWMdexHFwE_gCkinM0ylRbPwucqupu_8gHrS9m6v31dVW1UL_7vTlsm5MzgqX9eq/pub?embedded=true" )}>Itay Talgam: Lead like the great conductors</a>
                </div>
                <div className="linksTedTalks" id="tedTalk8">
                    <a id="linkTedTalk8" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk8").text, "https://www.youtube.com/embed/0MD4Ymjyc2I", "https://docs.google.com/document/d/e/2PACX-1vThc3ru7vVXfSLBwWJURGenzkHcZWOYLra5RAD6XJpLGzeni4yMdhFZMsEKuspGA2pzdtpHC_25YTwp/pub?embedded=true" )}>Yves Morieux: As work gets more complex, 6 rules to simplify</a>
                </div>
                <div className="linksTedTalks" id="tedTalk9">
                    <a id="linkTedTalk9" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk9").text, "https://www.youtube.com/embed/CHxhjDPKfbY", "https://docs.google.com/document/d/e/2PACX-1vTciDDKDwlBIai0OD_drBj8aWMNsYz-wduIvyXxVnxYbfaBm0zFI4wPC1p8HdAMYhPQOeP8Iokk0CIN/pub?embedded=true" )}>David Allen: The art of stress-free productivity</a>
                </div>
                <div className="linksTedTalks" id="tedTalk10">
                    <a id="linkTedTalk10" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk10").text, "https://www.youtube.com/embed/cHRZ6OrSvvI", "https://docs.google.com/document/d/e/2PACX-1vQo3BtUl8bB3RhVweFz0qNpfI0X4dTH0iYV79Q-qQ0EeqXZx-JEOm9r2Xtminj7r9AMUupfGlluXhz6/pub?embedded=true" )}>Navi Radjou: Creative problem-solving in the face of extreme limits</a>
                </div>
                <div className="linksTedTalks" id="tedTalk11">
                    <a id="linkTedTalk11" onClick={() => this.cargarTedTalk(document.getElementById("linkTedTalk11").text, "https://www.youtube.com/embed/H0_yKBitO8M", "https://docs.google.com/document/d/e/2PACX-1vStz2H7ZvVGvn4wuw3cNxXfRhqhL8ZXaKfV2M_ceG3OcsZIOzt5vPM28kWBqtYsY4WZNSIEgRFEBPus/pub?embedded=true" )}>Tom Wujec: Build a tower, build a team</a>
                </div>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-default">Relacion entre charlas</button>
                <button type="button" class="btn btn-default" style={{"margin-top": "10px"}}>Lecciones aprendidas</button>
            </div>
        </div>

        <div id="divContenido" style={{display:'none'}}>
            <h4 id="titulo">  </h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe title="frTalk" id="frTalk" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            <iframe title="frResumen" id="frResumen"></iframe>
        </div>
      </div>
    );
  }
}