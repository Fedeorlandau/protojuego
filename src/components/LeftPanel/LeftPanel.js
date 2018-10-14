import React, { Component } from 'react';
import { Progress, Table } from 'reactstrap';
import './style.css';
import GlobalVariable from '../GlobalVariable/GlobalVariable'

export default class LeftPanel extends Component {
  render() {
    return (
      <div>
        <h3>{GlobalVariable.userName}</h3>
        <div className="text-center">{GlobalVariable.progress}%</div>
        <Progress value={GlobalVariable.progress}/>
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


