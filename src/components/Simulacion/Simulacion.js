import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Line } from 'react-chartjs-2';
import { Row, Col, Input, Button, Label, FormGroup } from 'reactstrap';
import './style.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const emotions = {
  labels: ['Felicidad', 'Productividad', 'Tristeza', 'Frustracion'],
  datasets: [
    {
      label: 'Emociones',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [30, 100, 40, 60],
      max: 100,
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

const timeMarks = {
  5: <strong>5 Semanas</strong>,
  10: '10 Semanas',
  15: '15 Semanas',
  20: '20 Semanas',
  25: {
    style: {
      color: 'red',
    },
    label: <strong>25 Semanas </strong>,
  },
};

export default class SimulacionComponent extends Component {

  state = {
    data: {
      labels: ['0 Semanas', '5 Semanas', '10 Semanas', '15 Semanas', '20 Semanas', '25 Semanas'],
      datasets: [
        {
          label: 'Esperado',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'transparent',
          borderColor: 'green',
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
          data: [0, 500, 1000, 1500, 1700, 2000]
        },
        {
          label: 'Actual',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'transparent',
          borderColor: 'red',
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
          data: [0, 700, 1200, 1400, 1900, 2300]
        }
      ]
    },
  };

  updateChart() {
    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[1].data.slice(0);
    console.log(dataCopy)
    dataCopy.forEach((value, i) => {
      dataCopy[i] = value + 10;
    });
    datasetsCopy[1].data = dataCopy;
    this.setState({
      data: {...this.state.data, ...{
        datasets: datasetsCopy
        }
      }
    })
  }

  render() {
    return (
      <div className="levels-container">
        <h3>Simulación</h3>
        <div className="simulacion-container">
          <div className="config-card">
            <h3>Budget</h3>
            <span className="price">$2000</span>
          </div>
          <div className="complexity-container">
            <h3>
              Alcance
            </h3>
            <Slider marks={marks} step={null} defaultValue={25} onChange={() => this.updateChart()}/>
          </div>
          <div className="complexity-container">
            <h3>
              Tiempo
            </h3>
            <Slider marks={timeMarks} step={null} defaultValue={10}  max={25} onChange={() => this.updateChart()}/>
          </div>
          <div className="config-container">
          <Row>
            <Col>
              <div className="config-card">
                <h3>Gasto del sprint</h3>
                <span className="price">$200</span>
              </div>
            </Col>
            <Col>
              <div className="config-card">
                <h3>Devs</h3>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect" onChange={() => this.updateChart()}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </div>
              </div>
            </Col>
            <Col>
              <div className="config-card">
                <h3>Seniority</h3>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect" onChange={() => this.updateChart()}>
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
              <div className="reuniones-container">
                <h4>Reuniones</h4>
                <FormGroup row>
                  <Label md={2}>Daily</Label>
                  <Input type="select" name="select" id="exampleSelect" onChange={() => this.updateChart()} md={10}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Input>
                </FormGroup>
                <FormGroup row>
                  <Label md={2}>Semanal</Label>
                  <Input type="select" name="select" id="exampleSelect" onChange={() => this.updateChart()} md={10}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Input>
                </FormGroup>
                <FormGroup row>
                <Label md={2}>Capacitaciones</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={() => this.updateChart()} md={10}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
              </div>
            </Col>
            <Col>
              <div className="proyeccion-container">
                <h3> Proyección de gasto </h3>
                <Line data={this.state.data} />
              </div>
            </Col>
          </Row>
          <hr/>
            <Row>
              <Col>
                <Button color="primary" className="float-right btn-avanzar">Avanzar</Button>
              </Col>
            </Row>
          </div>
        </div>

      </div>
    );
  }
}
