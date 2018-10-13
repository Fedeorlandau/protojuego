import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';
import { QUESTIONS } from 'constants/questions';

export default class Question extends Component {

  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={QUESTIONS} questionTitle="Aprendiendo sobre Gestion de Proyectos"/>
      </Dashboard>
    );
  }
}
