import React, { Component } from 'react'; 
import 'react-toastify/dist/ReactToastify.css'; 

import './style.css';

export default class RulesComponenet extends Component {
 
  render() {
    return (
      <div>
          <h1>Reglas del juego</h1> 
          <iframe title="rules" src="https://docs.google.com/document/d/e/2PACX-1vQO09_jKR9R7Y0_-ZsOLlERDO8W2wnuPgcYILjZERPV1lBpEdROM_5k5cIsQONJQES-fYZI8dHfm7C-/pub?embedded=true"></iframe>
        <br/> 
      </div>
    );
  }
}
