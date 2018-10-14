import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import AuthRoute from 'components/AuthRoute/AuthRoute';

import HomePageContainer from 'containers/HomePage/HomePage'
import DashboardHomeContainer from 'containers/DashboardHome/Dashboard'
import SimulacionContainer from 'containers/Simulacion/Simulacion'
import QuestionContainer from 'containers/Question/Question'
import CasosEstudioContainer from 'containers/CasosEstudio/CasosEstudio'
import GestionCambioContainer from 'containers/GestionCambio/GestionCambio'
import GestionCambioQuizContainer from 'containers/GestionCambioQuiz/GestionCambioQuiz'
import TedTalksContainer from 'containers/TedTalks/TedTalks'
import PlanesContainer from 'containers/Planes/Planes'
import AplicacionGQM from 'containers/AplicacionGQM/AplicacionGQM'

import history from 'history/history';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePageContainer} />
          <AuthRoute path={ROUTES.DASHBOARD} exact component={DashboardHomeContainer} />
          <AuthRoute path={ROUTES.SIMULACION} exact component={SimulacionContainer} />
          <AuthRoute path={ROUTES.TED_TALKS} exact component={TedTalksContainer} />
          <AuthRoute path={ROUTES.QUESTIONS} exact component={QuestionContainer} />
          <AuthRoute path={ROUTES.CASOS_ESTUDIO} exact component={CasosEstudioContainer} />
          <AuthRoute path={ROUTES.GESTION_CAMBIO} exact component={GestionCambioContainer} />
          <AuthRoute path={ROUTES.GESTION_CAMBIO_QUIZ} exact component={GestionCambioQuizContainer} />
          <AuthRoute path={ROUTES.PLANESDESARROLLO} exact component={PlanesContainer} />
          <AuthRoute path={ROUTES.APLICACIONESGQM} exact component={AplicacionGQM} />
        </Switch> 
      </Router>
    );
  }
}
