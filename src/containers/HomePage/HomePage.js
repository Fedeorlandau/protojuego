import React, { Component } from 'react';
import { Random } from 'react-animated-text';
import Layout from 'containers/Layout/Layout';
import { ROUTES } from 'constants/routes';
import { Input, Button, Form, FormGroup } from 'reactstrap';
import history from 'history/history'
import './style.css';
import GlobalVariable from '../../components/GlobalVariable/GlobalVariable'

export default class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    console.log(evt.target.value);
    GlobalVariable.userName = evt.target.value;
  }
  
  handleClick() {  
    history.push(ROUTES.DASHBOARD);
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
              <Input type="text" name="name" placeholder="Escribí tu nombre" onChange={evt => this.updateInputValue(evt)}/>
            </FormGroup>
            <Button type="button" className="btn-protojuego" onClick={() => this.handleClick()} >Entrar</Button>
            
          </Form>
          </div>
        </div>
      </Layout>
    );
  }
} 