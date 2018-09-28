import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from 'components/Footer/Footer';
import './style.css';

export default class Layout extends Component {
  render() {
    return (
      <Container fluid={true}>
        {this.props.children}
        <Footer/>
      </Container>
    );
  }
}
