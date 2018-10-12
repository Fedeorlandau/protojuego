import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { QUESTIONS } from 'constants/questions';

export default class QuestionComponent extends Component {

  state = {
    rightAnswers: 0,
    wrongAnswers: 0
  };

  render() {
    return (
      <div className="question-container">
        <h1>Aprendiendo sobre Gestion de Proyectos</h1>
      </div>
    );
  }
}
