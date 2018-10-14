import React, { Component } from 'react';
import { Random } from 'react-animated-text';
import Layout from 'containers/Layout/Layout';
import { ROUTES } from 'constants/routes';
import { Input, Button, Form, FormGroup } from 'reactstrap';
import history from 'history/history'
import './style.css';
import User from 'components/User/User';

export default class HomePageContainer extends Component {

  state = {
    name: 'Tu nombre'
  };

  goDashboard() {
    User.setName(this.state.name);
    history.push(ROUTES.DASHBOARD)
  }

  updateInputValue(evt) {
    this.setState({
      name: evt.target.value
    });
  }

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
              <Input type="text" value={this.state.name} name="name" placeholder="Escribí tu nombre" onChange={(evt) => this.updateInputValue(evt)} />
            </FormGroup>
            <Button type="button" className="btn-protojuego" onClick={() => this.goDashboard()}>Entrar</Button>
          </Form>
          </div>
        </div>
      </Layout>
    );
  }
}
