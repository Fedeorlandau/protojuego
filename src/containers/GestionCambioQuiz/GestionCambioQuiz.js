import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';
import { QUESTIONS } from 'constants/questionsGestionCambio';

export default class GestionCambioQuizContainer extends Component {
  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={QUESTIONS} questionTitle="Aprendiendo sobre Gestion de Cambios" AchievementName="Gestion de cambios"/>
      </Dashboard>
    );
  }
}
