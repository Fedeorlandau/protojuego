import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col } from 'reactstrap';
import { ROUTES } from 'constants/routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';

import './style.css';

export default class LevelsComponenet extends Component {

  componentDidMount() {
    console.log('asd')
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'foo-bar'
    });
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
                <CardImg top width="100%" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Simulacion</CardTitle>
                  <CardText>Afronta los desafios </CardText>
                  <Button onClick={() =>  history.push(ROUTES.SIMULACION)}>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://www.allnursingschools.com/wp-content/uploads/2016/11/article-nclex-exam.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Examenes prácticos</CardTitle>
                  <CardText>Afronta los desafios </CardText>
                  <Button>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="https://lagunita.stanford.edu/c4x/StanfordOnline/O.P.E.N./asset/course_design_tile.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Cursos</CardTitle>
                  <CardText>Afronta los desafios </CardText>
                  <Button>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="100%" src="http://www.pewresearch.org/wp-content/uploads/2016/11/FT_16.11.23_Nonreaders-promo.jpg" height="200" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Material de referencia</CardTitle>
                  <CardText>Afronta los desafios </CardText>
                  <Button>Ingresar</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <ToastContainer autoClose={8000} />

      </div>
    );
  }
}
