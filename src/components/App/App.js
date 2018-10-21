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
import GestionProyectosContainer from 'containers/GestionProyectos/GestionProyectos'
import ChangeManagementContainer from 'containers/ChangeManagement/ChangeManagement'
import AplicacionGQM from 'containers/AplicacionGQM/AplicacionGQM'
import Carreras from 'containers/Carreras/Carreras'
import CarrerasQuiz from 'containers/CarrerasQuiz/CarrerasQuiz'
import MetricasSoftwareContainer from 'containers/MetricasSoftware/MetricasSoftware'
import MetricasSoftwareQuizContainer from 'containers/MetricasSoftwareQuiz/MetricasSoftwareQuiz'
import PropuestasLudicasContainer from 'containers/PropuestasLudicas/PropuestasLudicas'
import CasosEstimacionesContainer from 'containers/CasosEstimaciones/CasosEstimaciones'
import EstimacionesContainer from 'containers/Estimaciones/Estimaciones'
import EstimacionesQuizContainer from 'containers/EstimacionesQuiz/EstimacionesQuiz'
import DificultadesContainer from 'containers/Dificultades/Dificultades'
import QuizesContainer from 'containers/Quizes/Quizes'

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
          <AuthRoute path={ROUTES.GESTIONPROYECTOS} exact component={GestionProyectosContainer} />
          <AuthRoute path={ROUTES.APLICACIONESGQM} exact component={AplicacionGQM} />
          <AuthRoute path={ROUTES.CARRERAS} exact component={Carreras} />
          <AuthRoute path={ROUTES.CARRERAS_QUIZ} exact component={CarrerasQuiz} />
          <AuthRoute path={ROUTES.METRICAS_SOFTWARE} exact component={MetricasSoftwareContainer} />
          <AuthRoute path={ROUTES.METRICAS_SOFTWARE_QUIZ} exact component={MetricasSoftwareQuizContainer} />
          <AuthRoute path={ROUTES.ESTIMACIONES} exact component={EstimacionesContainer} />
          <AuthRoute path={ROUTES.ESTIMACIONES_QUIZ} exact component={EstimacionesQuizContainer} />
          <AuthRoute path={ROUTES.PROPUESTAS_LUDICAS} exact component={PropuestasLudicasContainer} />
          <AuthRoute path={ROUTES.CHANGEMANAGEMENT} exact component={ChangeManagementContainer} />
          <AuthRoute path={ROUTES.CASOSESTIMACIONES} exact component={CasosEstimacionesContainer} />
          <AuthRoute path={ROUTES.DIFICULTADES} exact component={DificultadesContainer} />
          <AuthRoute path={ROUTES.QUIZES} exact component={QuizesContainer} />
        </Switch> 
      </Router>
    );
  }
}
