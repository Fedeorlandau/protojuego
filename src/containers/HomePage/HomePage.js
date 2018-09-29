import React, { Component } from 'react';
import { Random } from 'react-animated-text';
import Layout from 'containers/Layout/Layout';
import { ROUTES } from 'constants/routes';
import { redirect } from 'react-router-dom';
import { Input, Button, Form, FormGroup } from 'reactstrap';
import './style.css';

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
              <Input type="text" name="name" placeholder="Escribí tu nombre" />
            </FormGroup>
            <Button type="button" className="btn-protojuego" onClick={() =>  this.props.history.push(ROUTES.DASHBOARD)}>Entrar</Button>
          </Form>
          </div>
        </div>
      </Layout>
    );
  }
}
