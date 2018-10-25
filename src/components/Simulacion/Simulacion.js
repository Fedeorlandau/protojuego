import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Line } from 'react-chartjs-2';
import { Row, Col, Input, Button, Label, FormGroup, UncontrolledTooltip } from 'reactstrap';
import './style.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import User from 'components/User/User';
import { toast } from 'react-toastify';
import InfoIcon from 'assets/info_icon.png';
import InfoIconWhite from 'assets/info-icon-white.png';


const SPRINT_BUDGET_DEFAULT = 0;

const SENIORITY_VALUE = {
  'Junior': 150,
  'Semi Senior': 300,
  'Senior': 450
};

const SENIORITY_PROBABILIDAD = {
  'Junior': 30,
  'Semi Senior': 50,
  'Senior': 75
};

export default class SimulacionComponent extends Component {

  state = {
    data: {
      labels: ['Semana 0', '1 Semana', '2 Semanas', '3 Semanas', '4 Semanas', '5 Semanas'],
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
          data: this.props.total == 10000 ? [0, 2000, 4000, 6000, 8000, 10000] : [0, 1600, 3200, 4800, 6400, 8000]
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
          data: this.props.total == 10000 ? [0, 2000, 4000, 6000, 8000, 10000] : [0, 1600, 3200, 4800, 6400, 8000]
        }
      ]
    },
    data_tareas: {
      labels: ['Semana 0', '1 Semana', '2 Semanas', '3 Semanas', '4 Semanas', '5 Semanas'],
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
          data: this.props.tareas == 50 ? [0, 10, 20, 30, 40, 50] : [0, 12, 24, 36, 48, 60]
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
          data: this.props.tareas == 50 ? [0, 10, 20, 30, 40, 50] : [0, 12, 24, 36, 48, 60]
        }
      ]
    },
    sprintBudget: SPRINT_BUDGET_DEFAULT,
    devs: 1,
    seniority: 'Junior',
    daily: 0,
    semanal: 0,
    capacitaciones: 0,
    tiempo: 10,
    total: this.props.total,
    semana: 0,
    tareas_resueltas: 0,
    tareas: 5,
    tareas_totales: this.props.tareas,
  };

  componentDidMount() {
    this.calculateBudget();
  }

  updateChart() {
    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[1].data.slice(0);
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

  calculateBudget() {
    const devSeniority = this.state.devs * SENIORITY_VALUE[this.state.seniority] + this.state.tareas * 10;
    this.setState({
      sprintBudget: SPRINT_BUDGET_DEFAULT + devSeniority ,
    })
  }

  updateBudget(type, value) {
    const update = {};
    update[type] = value;
    this.setState(update, () => this.calculateBudget());
  }

  trabajar() {
    const { seniority } = this.state;
    // sea n100 un número del 1 al 100 y n3 el resultado de tu función
    const n100 = Math.floor(Math.random()*100+1);

    if(n100<=SENIORITY_PROBABILIDAD[seniority]) {
      return 1;
    }
    return 0;
  }

  calcularDailyParaJunior() {
    const { daily } = this.state;
    switch(daily) {
      case 0:
        return -1;
        break;
      case 1:
        return 2;
        break;
      case 2:
        return 1;
        break;
      case 3:
        return -2;
        break;
      default:
        return 0;
    }
  }

  calcularDailyParaSemi() {
    const { daily } = this.state;
    switch(daily) {
      case 0:
        return -1;
        break;
      case 1:
        return 3;
        break;
      case 2:
        return -2;
        break;
      case 3:
        return -3;
        break;
      default:
        return 0;
    }
  }

  calcularDailyParaSenior() {
    const { daily } = this.state;
    switch(daily) {
      case 0:
        return 0;
        break;
      case 1:
        return 1;
        break;
      case 2:
        return -2;
        break;
      case 3:
        return -4;
        break;
      default:
        return 0;
    }
  }

  calcularSemanaParaJunior() {
    const { semanal } = this.state;
    switch(semanal) {
      case 0:
        return -2;
        break;
      case 1:
        return 2;
        break;
      default:
        return 0;
    }
  }

  calcularSemanaParaSemi() {
    const { semanal } = this.state;
    switch(semanal) {
      case 0:
        return -1;
        break;
      case 1:
        return 1;
        break;
      default:
        return 0;
    }
  }

  calcularSemanaParaSenior() {
    return 0;
  }

  calcularCapacitacionParaJunior() {
    const { capacitaciones } = this.state;
    switch(capacitaciones) {
      case 0:
        return -2;
        break;
      case 1:
        return 2;
        break;
      case 2:
        return 1;
        break;
      default:
        return 0;
    }
  }

  calcularCapacitacionParaSemi() {
    const { capacitaciones } = this.state;
    switch(capacitaciones) {
      case 0:
        return -1;
        break;
      case 1:
        return 1;
        break;
      case 2:
        return 0;
        break;
      default:
        return 0;
    }
  }

  calcularCapacitacionParaSenior() {
    const { capacitaciones } = this.state;
    switch(capacitaciones) {
      case 0:
        return 2;
        break;
      case 1:
        return -1;
        break;
      case 2:
        return -2;
        break;
      default:
        return 0;
    }
  }


  calcularTareasResueltasSprint() {
    const { tareas, daily, semanal, capacitaciones, devs, seniority } = this.state;

    const tareas_dev = tareas / devs;
    let tareas_resueltas = 0;

    for (let i=0; i < devs; i++){
      for (let j=0; j < tareas_dev; j++){
        tareas_resueltas+= this.trabajar();
      }
    }

    let dailyBalancer;
    switch(seniority) {
      case 'Junior':
        dailyBalancer = this.calcularDailyParaJunior();
        break;
      case 'Semi Senior':
        dailyBalancer = this.calcularDailyParaSemi();
        break;
      default:
        dailyBalancer = this.calcularDailyParaSenior();
    }

    let semanaBalancer;
    switch(seniority) {
      case 'Junior':
        semanaBalancer = this.calcularSemanaParaJunior();
        break;
      case 'Semi Senior':
        semanaBalancer = this.calcularSemanaParaSemi();
        break;
      default:
        semanaBalancer = this.calcularSemanaParaSenior();
    }

    let capacitacionesBalancer;
    switch(seniority) {
      case 'Junior':
        capacitacionesBalancer = this.calcularCapacitacionParaJunior();
        break;
      case 'Semi Senior':
        capacitacionesBalancer = this.calcularCapacitacionParaSemi();
        break;
      default:
        capacitacionesBalancer = this.calcularCapacitacionParaSenior();
    }


    tareas_resueltas = tareas_resueltas + dailyBalancer  - semanaBalancer - capacitacionesBalancer;
    return tareas_resueltas < 0 ? 0 : tareas_resueltas;
  }

  nextSprint() {
    const { sprintBudget, total, tareas_resueltas } = this.state;

    const tareas_resueltas_sprint = this.calcularTareasResueltasSprint();
    this.setState({
      total: total - sprintBudget,
      sprintBudget,
      tareas_resueltas: tareas_resueltas_sprint,
      tareas_totales: this.state.tareas_totales - tareas_resueltas_sprint
    });

    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[1].data.slice(0);
    dataCopy[this.state.semana +1] = sprintBudget;
    dataCopy.forEach((value, i) => {
      if(i >= this.state.semana +1) {
        dataCopy[i] = sprintBudget + dataCopy[i-1] ;
      }
    });
    datasetsCopy[1].data = dataCopy;

    const datasetsTasksCopy = this.state.data_tareas.datasets.slice(0);
    const dataTasksCopy = datasetsTasksCopy[1].data.slice(0);
    dataTasksCopy[this.state.semana +1] = tareas_resueltas_sprint;
    dataTasksCopy.forEach((value, i) => {
      if(i > this.state.semana +1) {
        dataTasksCopy[i] = tareas_resueltas_sprint + dataTasksCopy[i -1];
      }
    });
    datasetsTasksCopy[1].data = dataTasksCopy;
    if(this.state.semana + 1 == 5) {
      User.updateProgress('Simulacion');
      toast.warn("Logro adquirido: Simulacion");
    }
    this.setState({
      data: {
        ...this.state.data,
        ...{
          datasets: datasetsCopy
        }
      },
      data_tareas: {
        ...this.state.data,
        ...{
          datasets: datasetsTasksCopy
        }
      },
      semana: this.state.semana + 1
    },   window.scrollTo(0, 0));


  }

  render() {
    return (
      <div className="levels-container">
        <div className="simulacion-container">
          <Row>
            <Col>
              <h1>Variables del proyecto</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="config-card card-inverse">
                <h3>Presupuesto Proyecto <img src={InfoIcon} className="tooltip-info" href="#" id="UncontrolledTooltipExample"/></h3>
                <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                  Este es el presupuesto del proyecto, a medida que se avance con la simulación se ira reduciendo con el gasto de cada semana.
                </UncontrolledTooltip>
                <span className="price">${this.state.total}</span>
              </div>
            </Col>
            <Col>
              <div className="config-card card-inverse">
                <h3>Tareas totales  <img src={InfoIcon} className="tooltip-info" href="#" id="T2"/></h3>
                <UncontrolledTooltip placement="right" target="T2">
                  Esta es la cantidad de tareas faltantes para completar el proyecto. Se irán reduciendo a medida que los desarrolladores cumplan sus tareas.
                </UncontrolledTooltip>
                <span className="price">{this.state.tareas_totales}</span>
              </div>
            </Col>
            <Col>
              <div className="config-card card-inverse">
                <h3>Tiempo máximo  <img src={InfoIcon} className="tooltip-info" href="#" id="T3"/></h3>
                <UncontrolledTooltip placement="right" target="T3">
                  Este proyecto tiene una duración total de 5 semanas. Luego de que se cumpla el plazo la simulación termina.
                </UncontrolledTooltip>
                <span className="price">5 Semanas</span>
              </div>
            </Col>
          </Row>
          <Row className="proyecciones">
            <Col md={6} lg={6}>
              <div className="proyeccion-container">
                <h3> Proyección de gasto <img src={InfoIcon} className="tooltip-info" href="#" id="T4"/></h3>
                <UncontrolledTooltip placement="right" target="T4">
                  Esta métrica muestra la proyección de gasto esperada contra la conseguida a lo largo de la simulación.
                </UncontrolledTooltip>
                <Line data={this.state.data} />
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="proyeccion-container">
                <h3> Proyección de tiempo/tareas <img src={InfoIcon} className="tooltip-info" href="#" id="T5"/></h3>
                <UncontrolledTooltip placement="right" target="T5">
                  Esta métrica muestra la proyección de cantidad de tareas resueltas en cada semana esperada contra la conseguida a lo largo de la simulación.
                </UncontrolledTooltip>
                <Line data={this.state.data_tareas} />
              </div>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <h1>Progreso semanal</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="config-card card-red">
                <h3>Semana actual</h3>
                <span className="price">{this.state.semana}</span>
              </div>
            </Col>
            <Col>
              <div className="config-card card-red">
                <h3>Tareas resueltas</h3>
                <span className="price">{this.state.tareas_resueltas}</span>
              </div>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <h1>Parametrización</h1>
            </Col>
          </Row>
          <div className="config-container">
          <Row>

            <Col md={4}>
              <div className="config-card">
                <h4>Devs <img src={InfoIconWhite} className="tooltip-info" href="#" id="T6"/></h4>
                <UncontrolledTooltip placement="right" target="T6">
                  Cantidad de desarroladores utilizados en la semana. A mayor cantidad de desarrolladores mayor gasto semanal.
                </UncontrolledTooltip>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect" onChange={(evt) => this.updateBudget('devs', parseInt(evt.target.value,10))}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="config-card">
                <h4>Seniority <img src={InfoIconWhite} className="tooltip-info" href="#" id="T7"/></h4>
                <UncontrolledTooltip placement="right" target="T7">
                  El seniority de los desarrolladores utilizados en la semana. Cada seniority tiene diferente probabilidad de terminar una tarea. Junior 30%, Semi-senior 50%, Senior 75%.
                </UncontrolledTooltip>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect" onChange={(evt) => this.updateBudget('seniority', evt.target.value)}>
                    <option>Junior</option>
                    <option>Semi Senior</option>
                    <option>Senior</option>
                  </Input>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="config-card">
                <h4>Cantidad de tareas la iteracion <img src={InfoIconWhite} className="tooltip-info" href="#" id="T8"/></h4>
                <UncontrolledTooltip placement="right" target="T8">
                  Cantidad de tareas a la que se aspira completar en la semana. Esto aumenta el gasto semanal ya que los desarrolladores tienen que trabajar más tiempo.
                </UncontrolledTooltip>
                <div className="config-input">
                  <Input type="select" name="select" id="exampleSelect" onChange={(evt) => this.updateBudget('tareas', parseInt(evt.target.value,10))}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
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
                <h4>Reuniones <img src={InfoIcon} className="tooltip-info" href="#" id="T9"/></h4>
                <UncontrolledTooltip placement="right" target="T9">
                  Las reuniones pueden aumentar la probabilidad de completar tareas si los desarrolladores no tienen mucha experiencia. Si se abusa de las mismas puede reducir la cantidad de tareas resueltas.
                </UncontrolledTooltip>
                <FormGroup row>
                  <Col md={2}>
                    <Label md={2}>Daily</Label>
                  </Col>
                  <Col md={10}>
                    <Input type="select" name="select" id="exampleSelect"  onChange={(evt) => this.updateBudget('daily', parseInt(evt.target.value,10))} md={10}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Input>
                  </Col>

                </FormGroup>
                <FormGroup row>
                  <Col md={2}>
                    <Label md={2}>Semanal</Label>
                  </Col>
                  <Col md={10}>
                  <Input type="select" name="select" id="exampleSelect"  onChange={(evt) => this.updateBudget('semanal', parseInt(evt.target.value,10))} md={10}>
                    <option>0</option>
                    <option>1</option>
                  </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}>
                    <Label md={2}>Capacitaciones</Label>
                  </Col>
                  <Col md={8}>
                    <Input type="select" name="select" id="exampleSelect"  onChange={(evt) => this.updateBudget('capacitaciones', parseInt(evt.target.value,10))} md={10}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </Col>
              </FormGroup>
              </div>
            </Col>

            <Col md={4}>
              <div className="config-card config-gasto">
                <h4>Gasto de la semana</h4>
                <span className="price">${this.state.sprintBudget}</span>
              </div>
            </Col>

          </Row>
          <hr/>
            <Row>
              <Col>
                {this.state.semana < 5 && <Button color="primary" className="float-right btn-avanzar" onClick={() => this.nextSprint()}>Avanzar</Button> }
                {this.state.semana >= 5 && <div>
                  <h1>Felicitades! Terminaste la simulación. Mirá las métricas arriba y fijate cómo te fue.</h1>
                </div>}
              </Col>
            </Row>
          </div>
        </div>

      </div>
    );
  }
}
