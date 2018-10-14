import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';
import { QUESTIONS } from 'constants/questionsMetricasSoftware';

export default class MetricasSoftwareQuizContainer extends Component {
  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={QUESTIONS} questionTitle="Aprendiendo sobre Metricas de Software" AchievementName="Metricas de Software"/>
      </Dashboard>
    );
  }
}
