import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';
import { QUESTIONS } from 'constants/questionsCarreras';

export default class CarrerasQuizContainer extends Component {
  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={QUESTIONS} questionTitle="Carreras y Estrategias de los Trabajos Informáticos" AchievementName="Carreras"/>
      </Dashboard>
    );
  }
}
