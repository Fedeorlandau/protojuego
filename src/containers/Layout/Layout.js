import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './style.css';

export default class Layout extends Component {
  render() {
    return (
      <Container className="container">
        {this.props.children}
      </Container>
    );
  }
}
