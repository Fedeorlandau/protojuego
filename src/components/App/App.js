import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePageContainer from 'containers/HomePage/HomePage'
import DashboardHomeContainer from 'containers/DashboardHome/Dashboard'
import SimulacionContainer from 'containers/Simulacion/Simulacion'
import QuestionContainer from 'containers/Question/Question'
import CasosEstudioContainer from 'containers/CasosEstudio/CasosEstudio'
import GestionCambioContainer from 'containers/GestionCambio/GestionCambio'
import GestionCambioQuizContainer from 'containers/GestionCambioQuiz/GestionCambioQuiz'
import MetricasSoftwareContainer from 'containers/MetricasSoftware/MetricasSoftware'
import MetricasSoftwareQuizContainer from 'containers/MetricasSoftwareQuiz/MetricasSoftwareQuiz'
import EstimacionesContainer from 'containers/Estimaciones/Estimaciones'
import EstimacionesQuizContainer from 'containers/EstimacionesQuiz/EstimacionesQuiz'
import DiplomaContainer from 'containers/Diploma/Diploma'

import history from 'history/history';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePageContainer} />
          <Route path={ROUTES.DASHBOARD} exact component={DashboardHomeContainer} />
          <Route path={ROUTES.SIMULACION} exact component={SimulacionContainer} /> 
          <Route path={ROUTES.QUESTIONS} exact component={QuestionContainer} />
          <Route path={ROUTES.CASOS_ESTUDIO} exact component={CasosEstudioContainer} />
          <Route path={ROUTES.GESTION_CAMBIO} exact component={GestionCambioContainer} />
          <Route path={ROUTES.GESTION_CAMBIO_QUIZ} exact component={GestionCambioQuizContainer} />
          <Route path={ROUTES.METRICAS_SOFTWARE} exact component={MetricasSoftwareContainer} />
          <Route path={ROUTES.METRICAS_SOFTWARE_QUIZ} exact component={MetricasSoftwareQuizContainer} />
          <Route path={ROUTES.ESTIMACIONES} exact component={EstimacionesContainer} />
          <Route path={ROUTES.ESTIMACIONES_QUIZ} exact component={EstimacionesQuizContainer} />
          <Route path={ROUTES.DIPLOMA} exact component={DiplomaContainer} />
        </Switch> 
      </Router>
    );
  }
}
