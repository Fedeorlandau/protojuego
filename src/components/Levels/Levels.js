import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col } from 'reactstrap';
import { ROUTES } from 'constants/routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';

import './style.css';

export default class LevelsComponenet extends Component {

  componentDidMount() {
    toast.info("Bienvenido a ProtoJuego ISW2 !");
  }

  render() {
    return (
      <div className="levels-container">
        <h3>Niveles</h3>
        <hr/>
        <div className="cards-container">
          <Row>
          <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Material de referencia</CardTitle>
                  <CardText>Refresca los casos de estudio </CardText>
                  <Button onClick={() =>  history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Simulacion</CardTitle>
                  <CardText>Afronta los desafios de un caso de estudio</CardText>
                  <Button onClick={() =>  history.push(ROUTES.SIMULACION)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.allnursingschools.com/wp-content/uploads/2016/11/article-nclex-exam.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gestion de cambios</CardTitle>
                  <CardText>Abraza al cambio!</CardText>
                  <Button onClick={() =>  history.push(ROUTES.GESTION_CAMBIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://lagunita.stanford.edu/c4x/StanfordOnline/O.P.E.N./asset/course_design_tile.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Metricas de software</CardTitle>
                  <CardText>Mide tu avance en el desarrollo</CardText>
                  <Button onClick={() =>  history.push(ROUTES.METRICAS_SOFTWARE)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row>
          <Col>
              <Card>
                <CardImg top width="100%" src="https://www.axelos.com/Corporate/media/Images/Website%20Assets/Blogs/change-management-large.gif?width=455&height=231&ext=.gif" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gestion de Estimaciones</CardTitle>
                  <CardText>Estima de forma más efectiva</CardText>
                  <Button onClick={() =>  history.push(ROUTES.ESTIMACIONES)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <br/>
            <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Estimaciones</CardTitle>
                  <CardText>some text</CardText>
                  <Button onClick={() =>  history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>to change</CardTitle>
                  <CardText>some text</CardText>
                  <Button onClick={() =>  history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>last one to change</CardTitle>
                  <CardText>some text</CardText>
                  <Button onClick={() =>  history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row>
          <Col>
              <Card>
                <CardImg top width="100%" src="https://www.universal.tv/sites/default/files/movie/images/ted_2_-_hero_with_tt_0.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Charlas TED</CardTitle>
                  <CardText>Aprendé de expertos</CardText>
                  <Button onClick={() =>  history.push(ROUTES.TED_TALKS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.wikihow.com/images_en/thumb/9/9c/Play-Ludo-Step-3-Version-3.jpg/v4-728px-Play-Ludo-Step-3-Version-3.jpg.webp" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Propuestas ludicas</CardTitle>
                  <CardText>Aprendé jugando</CardText>
                  <Button onClick={() =>  history.push(ROUTES.TED_TALKS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
