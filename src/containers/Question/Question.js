import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import QuestionComponent from 'components/Question/Question';

export default class Question extends Component {

  render() {
    return (
      <Dashboard>
        <QuestionComponent questions={this.props.questions} questionTitle={this.props.questionTitle}/>
      </Dashboard>
    );
  }
}
