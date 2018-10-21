import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col
} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';

import './style.css';

export default class QuizesComponenet extends Component {
 
  render() {
    return (
      <div className="levels-container">
        <h3>Selecciona una Quiz</h3>
        <hr />
        <div className="cards-container">
        <Row>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.allnursingschools.com/wp-content/uploads/2016/11/article-nclex-exam.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gestion de cambios</CardTitle>
                  <CardText>Abraza al cambio!</CardText>
                  <Button onClick={() => history.push(ROUTES.GESTION_CAMBIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://lagunita.stanford.edu/c4x/StanfordOnline/O.P.E.N./asset/course_design_tile.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Metricas de software</CardTitle>
                  <CardText>Mide tu avance en el desarrollo</CardText>
                  <Button onClick={() => history.push(ROUTES.METRICAS_SOFTWARE)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.axelos.com/Corporate/media/Images/Website%20Assets/Blogs/change-management-large.gif?width=455&height=231&ext=.gif" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gestion de Estimaciones</CardTitle>
                  <CardText>Estima de forma más efectiva</CardText>
                  <Button onClick={() => history.push(ROUTES.ESTIMACIONES)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.reasonwhy.es/sites/default/files/empleo-futuro-reasonwhy.es_.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Carreras y Estrategias de los Trabajos Informáticos</CardTitle>
                  <CardText>¿Qué nos depara para el futuro el mundo laboral?</CardText>
                  <Button onClick={() => history.push(ROUTES.CARRERAS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
