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

export default class LevelsComponenet extends Component {

  componentDidMount() {
    toast.info("Bienvenido a ProtoJuego ISW2 !");
  }

  render() {
    return (
      <div className="levels-container">
        <h3>Inicio</h3>
        <hr />
        <div className="cards-container">
          <Row>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Simulacion</CardTitle>
                  <CardText>Afronta los desafios de un caso de estudio</CardText>
                  <Button onClick={() => history.push(ROUTES.DIFICULTADES)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
            <Card>
              <CardImg top width="100%" src="https://static.vecteezy.com/system/resources/previews/000/131/160/large_2x/trivia-quiz-logo-illustration-vector.jpg" height="200" alt="Card image cap" />
              <CardBody>
                <CardTitle>Banco de examenes</CardTitle>
                <CardText>Completa los examenes para completar el desafio</CardText>
                <Button onClick={() => history.push(ROUTES.QUIZES)}>Ingresar</Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Casos de estudio</CardTitle>
                  <CardText>Refresca los casos de estudio </CardText>
                  <Button onClick={() => history.push(ROUTES.CASOS_ESTUDIO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.wikihow.com/images_en/thumb/9/9c/Play-Ludo-Step-3-Version-3.jpg/v4-728px-Play-Ludo-Step-3-Version-3.jpg.webp" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Propuestas ludicas</CardTitle>
                  <CardText>Gamificá tus métodos y modelos</CardText>
                  <Button onClick={() => history.push(ROUTES.PROPUESTAS_LUDICAS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>       
            <Col>
              <Card>
                <CardImg top width="100%" src="https://diylogodesigns.com/wp-content/uploads/2017/09/ted-logo-vector-768x768.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Charlas TED</CardTitle>
                  <CardText>Aprendé de expertos</CardText>
                  <Button onClick={() => history.push(ROUTES.TED_TALKS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>   
            <Col>
              <Card>
                <CardImg top width="100%" src="http://1.bp.blogspot.com/-DGQNiohV6Zc/UX7As5lh4_I/AAAAAAAAACo/5dP3Vrgu58M/s1600/Reports.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Aplicaciones de GQM</CardTitle>
                  <CardText>Ejemplos de Aplicaciones en FLV, Quateams CRM y Teradyne</CardText>
                  <Button onClick={() => history.push(ROUTES.APLICACIONESGQM)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>  
            <Col> 
              <Card>
                <CardImg top width="100%" src="http://www.liquidplanner.com/wp-content/uploads/HiRes-17.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gestion de Proyectos</CardTitle>
                  <CardText>Relaciones conceptuales entre papers y el PMBOK</CardText>
                  <Button onClick={() => history.push(ROUTES.GESTIONPROYECTOS)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.arauca.gov.co/images/plandesarrollo/ejesestrategicos%20-%20copia.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Planes de Desarrollo de Software</CardTitle>
                  <CardText>Conocé más sobre este artefacto de UP y los planes desarrolllados para Teradyne y Fundacion Valle del Lili</CardText>
                  <Button onClick={() => history.push(ROUTES.PLANESDESARROLLO)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row> 
          <hr />
          <Row>
          <Col>
              <Card>
                <CardImg top width="100%" src="https://indolinkspanish.files.wordpress.com/2013/02/capturfiles5.png" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Proceso de Estimación en Casos de Estudio</CardTitle>
                  <CardText>¿De qué manera se debería haber llevado adelante el proceso de estimación de software en los casos de estudio?</CardText>
                  <Button onClick={() => history.push(ROUTES.CASOSESTIMACIONES)}>Ingresar</Button>
                </CardBody>
              </Card> 
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2016/02/gesti%C3%B3n-del-cambio.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Change Management</CardTitle>
                  <CardText>Relaciones entre Gestion del Cambio y Casos de Estudio</CardText>
                  <Button onClick={() => history.push(ROUTES.CHANGEMANAGEMENT)}>Ingresar</Button>
                </CardBody>
              </Card> 
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
}
