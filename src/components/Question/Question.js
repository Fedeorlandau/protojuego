import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css' 
import { Button, Row, Col } from 'reactstrap';
import GlobalVariable from '../GlobalVariable/GlobalVariable'
import { ROUTES } from 'constants/routes'; 
import history from 'history/history'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
}

const TIMER_DEFAULT = 20;
export default class QuestionComponent extends Component {

  state = {
    rightAnswers: 0,
    wrongAnswers: 0,
    totalAnswers: 0,
    showQuestion: false,
    isFirstTime: true,
    isCompleted: false,
    step: 0,
    time: 10,
    showError: false,
    showResults: false,
    isApproved: false,
    result: "",
    questions: shuffleArray(this.props.questions)
  };

  isApproved() {
    if((this.state.rightAnswers/ this.state.totalAnswers) >= 0.7) {
      this.state.result = "Aprobado";
      this.state.isApproved = true;
      GlobalVariable.progress+=1;
    } else{ 
      this.state.isApproved = "Desaprobado";
    }
  }

 interval() {
    if(this.state.time > 0){
      this.setState({
        time: this.state.time - 1
      })
    } else{
      this.clearTimer();
      this.showBadNews();
    }
  }

  startTimer() {
    this.countdown = setInterval(() => this.interval(), 1000);
  }

  clearTimer() {
    this.setState({
      time: TIMER_DEFAULT
    });
    clearInterval(this.countdown);
  }

  showBadNews() {
    this.setState({
      showError: true,
      step: 0,
      showQuestion: false,
      rightAnswers: 0,
      wrongAnswers: 0,
      totalAnswers: 0
    });
  }

  startQuestionnaire() {
    this.setState({
      showQuestion: true,
      isFirstTime:false,
      rightAnswers: 0,
      wrongAnswers: 0,
      totalAnswers: 0,
      step: 0,
      showError: false,
      showResults: false,
    });
    this.startTimer();
  }

  showResults() {
   this.setState({
     showResults: true,
     showQuestion: false
   })
  }

  validateAnswer(option) {

    if(option.isRight) {
      this.setState({
        rightAnswers: this.state.rightAnswers + 1
      })
    } else{
      this.setState({
        wrongAnswers: this.state.wrongAnswers + 1
      })
    }
    this.setState({
      totalAnswers: this.state.totalAnswers + 1
    });
    

    if(this.state.questions.length - 1 == this.state.step){
      this.showResults();
      this.clearTimer();
    } else{
      this.setState({
        step: this.state.step + 1
      });
      this.clearTimer();
      this.startTimer();
    }

  }

  renderQuestion() {
    const question = this.state.questions[this.state.step];
    return (
      <div className="options-container">
        <Row>
          <Col>
            <h3>{question.question}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.renderOptions()}
            </Col>
        </Row>
      </div>
    )
  }

  renderOptions() {

    const question = this.state.questions[this.state.step];
    return question.options.map((q, key) => (
        <Button color="primary" className="margin-button" key={key} onClick={() => this.validateAnswer(q)}>{q.answer}</Button>
      )
    )
  }

  renderError() {
    const { showError } = this.state;

    return (showError && <div className="error-container">
      <Row>
        <Col>
      <h3 className="error-message">Perdiste!</h3>
    </Col>
    </Row>
    </div>)
  }

  renderResults() {
   const {rightAnswers, wrongAnswers} = this.state;
   this.isApproved() ;
   return (
     <div className="results-container">
       <Row>
         <Col><h4>Respuestas correctas: {rightAnswers} </h4></Col>
         <Col><h4>Respuestas incorrectas: {wrongAnswers}</h4></Col>
         <Col><h4>El resultado del examen es: {this.state.isApproved}</h4></Col>
       </Row>
     </div>
   )
  }

  render() {
    const { showQuestion, time, showResults, isApproved, isFirstTime } = this.state;
    return (
      <div className="question-container">
        <h1>{this.props.questionTitle}</h1>
        <div className="questions-container">
          { showQuestion && <Row>
            <Col md={{offset: 4, size: 8}}>
              <div className="timer">
                Tiempo restante: <span className="timer-count">{time}</span> segundos
              </div>
            </Col>
          </Row>}
          {this.renderError()}
          {showResults && this.renderResults()}
          <Row>
            <Col md={{offset: 4, size: 4}}>
              { !showQuestion && !isApproved && isFirstTime && <Button className="btn-lg" onClick={() => this.startQuestionnaire(0)}>Comenzar!</Button> }
              { (!showQuestion && !isApproved && !isFirstTime) && <Button className="btn-lg" onClick={() => this.startQuestionnaire(0)}>Volver a jugar</Button> }
            </Col>
          </Row>
          <Row>
            <Col md={{offset: 4, size: 4}}>
              { showResults && <Button className="btn-lg" onClick={() => history.push(ROUTES.DASHBOARD)}>Terminar</Button> }</Col>
          </Row>
          { showQuestion && this.renderQuestion()}
        </div>
      </div>
    );
  }
}
