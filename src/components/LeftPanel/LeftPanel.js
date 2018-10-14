import React, { Component } from 'react';
import { Progress, Table } from 'reactstrap';
import './style.css';
import User from 'components/User/User';



export default class LeftPanel extends Component {

  componentDidMount() {
    window.addEventListener('storage', (e) => {
      if(e.key === 'progress') {
        this.setState({
          progress: e.newValue
        })
      }
    });
  }

  state= {
    progress: User.getProgress()
  };

  render() {
    return (
      <div>
        <h3>{User.getName()}</h3>
        <div className="text-center">{User.getProgress()}%</div>
        <Progress value={this.state.progress}/>
        <hr/>
        <h3>Ranking</h3>
        <Table>
          <thead>
          <tr>
            <th>Jugador</th>
            <th>Nivel</th>
            <th>Puntos</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Federico</td>
            <td>10</td>
            <td>599</td>
          </tr>
          <tr>
            <td>Federico</td>
            <td>10</td>
            <td>599</td>
          </tr>
          </tbody>
        </Table>

      </div>
    );
  }
}


