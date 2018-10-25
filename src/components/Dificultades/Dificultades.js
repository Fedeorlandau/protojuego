import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, Row, Col
} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';

import './style.css';

export default class DificultadesComponenet extends Component {

  componentDidMount() {
    toast.info("Bienvenido a ProtoJuego ISW2 !");
  }

  render() {
    return (
      <div className="levels-container">
        <h3>Selecciona una dificultad</h3>
        <hr />
        <div className="cards-container">
          <Row>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://image.ibb.co/fwS8Af/beginner.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Beginner</CardTitle>
                  <CardBody>En esta simulación tendrás $10.000 de presupuesto para el proyecto y 50 tareas a completar.</CardBody>
                  <Button onClick={() => history.push(ROUTES.SIMULACION_BEGINNER)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://image.ibb.co/jgzMVf/advance.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Intermediate</CardTitle>
                  <CardBody>En esta simulación tendrás $8.000 de presupuesto para el proyecto y 50 tareas a completar.</CardBody>
                  <Button onClick={() => history.push(ROUTES.SIMULACION_INTERMEDIATE)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://image.ibb.co/mcV6wL/intermediate.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Advance</CardTitle>
                  <CardBody>En esta simulación tendrás $8.000 de presupuesto para el proyecto y 60 tareas a completar.</CardBody>
                  <Button onClick={() => history.push(ROUTES.SIMULACION_ADVANCE)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            
          </Row> 
        </div>
      </div>
    );
  }
}
