import React, { Component } from 'react';
import Layout from 'containers/Layout/Layout';
import LeftPanel from 'components/LeftPanel/LeftPanel';
import { Row, Col } from 'reactstrap';
import './style.css';
import { ToastContainer } from 'react-toastify';
import history from 'history/history';
import ARROW from 'assets/chevron-sign-left.png'

export default class DashboardContainer extends Component {

  render() {
    return (
      <Layout showFooter={true}>
        <Row>
          <Col md={3} className="profile-container">

            <LeftPanel/>
            <span className="arrow-left" onClick={() => history.push('/dashboard')}>
                  <img alt="volver" className="arrow-left-img" src={ARROW} />
                Volver al Dashboard
              </span>
          </Col>
          <Col md={9}>
            {this.props.children}
          </Col>
        </Row>
        <ToastContainer autoClose={3000} />
      </Layout>
    );
  }
}
