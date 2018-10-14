import React, { Component } from 'react';
import { Random } from 'react-animated-text';
import Layout from 'containers/Layout/Layout';
import { ROUTES } from 'constants/routes';
import { Input, Button, Form, FormGroup } from 'reactstrap';
import history from 'history/history'
import './style.css';
import GlobalVariable from '../../components/GlobalVariable/GlobalVariable'

export default class HomePageContainer extends Component {

  render() {
    return (
      <Layout>
        <div className="logo-container">
          <Random
            text="Protojuego"
            effect="jump"
            effectChange={1.0}
            effectDuration={0.5}
            iterations={3}
          />
        </div>
        <div className="login-container">
          <h3>Bienvenido!</h3>
          <div className="form-container">
          <Form>
            <FormGroup>
              <Input type="text" name="name" placeholder="Escribí tu nombre" value={GlobalVariable.userName} />
            </FormGroup>
            <Button type="button" className="btn-protojuego" onClick={() => history.push(ROUTES.DASHBOARD)}>Entrar</Button>
          </Form>
          </div>
        </div>
      </Layout>
    );
  }
}
