import React, { Component } from 'react';
import Layout from 'containers/Layout/Layout';
import LeftPanel from 'components/LeftPanel/LeftPanel';
import { Row, Col } from 'reactstrap';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';

export default class DashboardContainer extends Component {

  render() {
    return (
      <Layout showFooter={true}>
        <Row>
          <Col md={3} className="profile-container">
            <LeftPanel/>
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
