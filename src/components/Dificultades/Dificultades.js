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
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Beginner</CardTitle>
                  <Button onClick={() => history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Intermediate</CardTitle>
                  <Button onClick={() => history.push(ROUTES.SIMULACION)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.allnursingschools.com/wp-content/uploads/2016/11/article-nclex-exam.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Advance</CardTitle>
                  <Button onClick={() => history.push(ROUTES.GESTION_CAMBIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            
          </Row> 
        </div>
      </div>
    );
  }
}
