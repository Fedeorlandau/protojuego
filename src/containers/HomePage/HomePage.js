import React, { Component } from 'react';
import Layout from 'containers/Layout/Layout';
import './style.css';

export default class HomePageContainer extends Component {

  render() {
    return (
      <Layout>
        <div className="logo-container">
          <h1>ProtoJuego</h1>
        </div>
      </Layout>
    );
  }
}
