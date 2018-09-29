import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from 'components/Footer/Footer';
import './style.css';

export default class Layout extends Component {
  render() {
    return (
      <Container fluid={true} className="h-100">
        {this.props.children}
        {!this.props.showFooter && <Footer/> }
      </Container>
    );
  }
}
