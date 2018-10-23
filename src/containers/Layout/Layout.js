import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from 'components/Footer/Footer';
import history from 'history/history'
import './style.css';

export default class Layout extends Component {


  render() {
    return (
      
      <Container fluid={true} className="h-100">
        <span
          className="arrow-left" 
          onClick={() => history.push('/dashboard')}>
          <img alt="volver" className="arrow-left" src={require('./chevron-sign-left.png')} />
        Volver al Dashboard
        </span>
        {this.props.children}
        {!this.props.showFooter && <Footer/> }
      </Container>
      
    );
  }
}
