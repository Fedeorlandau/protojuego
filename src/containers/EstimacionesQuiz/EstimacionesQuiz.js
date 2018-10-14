import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';
import { QUESTIONS } from 'constants/questionsEstimaciones';

export default class EstimacionesQuizContainer extends Component {
  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={QUESTIONS} questionTitle="Aprendiendo sobre Estimaciones" AchievementName="Estimaciones"/>
      </Dashboard>
    );
  }
}
