import React, { Component } from 'react';
import { Random } from 'react-animated-text';
import Layout from 'containers/Layout/Layout';
import Levels from 'components/Levels/Levels';
import LeftPanel from 'components/LeftPanel/LeftPanel';
import { Row, Col } from 'reactstrap';
import './style.css';

export default class DashboardContainer extends Component {

  render() {
    return (
      <Layout showFooter={true}>
        <Row>
          <Col md={3} className="profile-container">
            <LeftPanel/>
          </Col>
          <Col md={9}>
            <Levels/>
          </Col>
        </Row>

      </Layout>
    );
  }
}
