import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePageContainer from 'containers/HomePage/HomePage'
import DashboardHomeContainer from 'containers/DashboardHome/Dashboard'
import SimulacionContainer from 'containers/Simulacion/Simulacion'
import QuestionContainer from 'containers/Question/Question'
import CasosEstudioContainer from 'containers/CasosEstudio/CasosEstudio'
import history from 'history/history';
import { QUESTIONS } from 'constants/questions';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePageContainer} />
          <Route path={ROUTES.DASHBOARD} exact component={DashboardHomeContainer} />
          <Route path={ROUTES.SIMULACION} exact component={SimulacionContainer} />
<<<<<<< HEAD
          <Route path={ROUTES.QUESTIONS} exact component={() => <QuestionContainer questions={QUESTIONS} />}/>
          </Switch>
=======
          <Route path={ROUTES.QUESTIONS} exact component={QuestionContainer} />
          <Route path={ROUTES.CASOS_ESTUDIO} exact component={CasosEstudioContainer} />
        </Switch>
>>>>>>> 1be9ecedbba984cb117d9108eab45eeb9cd4013d
      </Router>
    );
  }
}
