import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css' 
import { Button, Row, Col } from 'reactstrap';
import User from 'components/User/User';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ROUTES } from 'constants/routes'; 
import history from 'history/history'


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
}

const TIMER_DEFAULT = 25;
export default class QuestionComponent extends Component {

  state = {
    rightAnswers: 0,
    wrongAnswers: 0,
    totalAnswers: 0,
    result: "",
    isFirstTime: true,
    isCompleted: false,
    showQuestion: false,
    step: 0,
    time: 25,
    showError: false,
    showResults: false,
    isApproved: false,
    questions: shuffleArray(this.props.questions)
  };

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

  showTentativeProgress(){
    var futureProgress = User.getTentativeProgress(this.props.achievementName);
    toast.warn("Completando este quiz alcanzarás un "+ futureProgress + "% de complititud");
  }

  startTimer() {
    this.countdown = setInterval(() => this.interval(), 2500);
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
      rightAnswers: 0,
      wrongAnswers: 0,
      isFirstTime:false,
      totalAnswers: 0,
      step: 0,
      showError: false,
      showResults: false,
    });
    this.showTentativeProgress();
    this.startTimer();
  }

  showResults() {
    var isOk = (this.state.rightAnswers / this.state.totalAnswers) >= 0.69;
   if(isOk) {
     User.updateProgress(this.props.achievementName);
     toast.warn("Logro adquirido: "+ this.props.achievementName);
   }
   this.setState({
     showResults: true,
     showQuestion: false,
     isApproved: isOk,
     result: isOk? "aprobado" : "desaprobado"
   });
  }

  validateAnswer(option) {

    if(option.isRight) {
      this.setState({
        rightAnswers: ++this.state.rightAnswers
      });
      toast.success("Respuesta correcta !");
    } else{
      this.setState({
        wrongAnswers: ++this.state.wrongAnswers
      });
      toast.error("Respuesta Incorrecta !");
    }
    this.setState({
      totalAnswers: ++this.state.totalAnswers
    });
    

    if(this.state.questions.length - 1 === this.state.step){
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
   const {rightAnswers, wrongAnswers, result} = this.state;
   return (
     <div className="results-container">
       <Row>
         <Col><h4>Respuestas correctas: {rightAnswers} </h4></Col>
         <Col><h4>Respuestas incorrectas: {wrongAnswers}</h4></Col>
         <Col><h4>El resultado del examen es: {result}</h4></Col>
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
              { showResults && <Button className="btn-lg" onClick={() => history.push(ROUTES.DASHBOARD) }>Terminar</Button>}
            </Col>
          </Row>

          { showQuestion && this.renderQuestion()}
        </div>
      </div>
    );
  }
}