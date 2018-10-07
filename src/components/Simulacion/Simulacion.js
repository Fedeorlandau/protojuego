import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Line, Radar} from 'react-chartjs-2';
import { Row, Col, Input, Label, FormGroup } from 'reactstrap';
import './style.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(255,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 30, 40, 30, 20, 50, 70]
    }
  ]
};

const marks = {
  0: <strong>Basico</strong>,
  25: 'Funcionalidad X',
  50: 'Funcionalidad Y',
  75: 'Funcionalidad Z',
  100: {
    style: {
      color: 'green',
    },
    label: <strong>Completo</strong>,
  },
};

export default class SimulacionComponent extends Component {

  render() {
    return (
      <div className="levels-container">
        <h3>Simulación</h3>
        <hr/>
        <div className="simulacion-container">
          <div className="complexity-container">
            <h3>
              Alcance
            </h3>
            <Slider marks={marks} step={null} defaultValue={25} />
          </div>
          <div className="config-container">
          <Row>
            <Col>
              <div className="config-card">
                <h3>Budget</h3>
                <span className="price">$200</span>
              </div>
            </Col>
            <Col>
              <div className="config-card">
                <h3>Devs</h3>
                <div className="config-input">
                    <Input type="number" name="devs" id="exampleSelect" value="5"/>
                </div>
              </div>
            </Col>
            <Col>
              <div className="config-card">
                <h3>Seniority</h3>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Junior</option>
                    <option>Semi Senior</option>
                    <option>Senior</option>
                  </Input>
                </div>
              </div>
            </Col>
          </Row>
          </div>
          <div className="charts-container">
          <Row>
            <Col>
              <Line data={data} />
            </Col>
            <Col>
              <Radar data={data} />
            </Col>
          </Row>
          </div>
        </div>

      </div>
    );
  }
}
