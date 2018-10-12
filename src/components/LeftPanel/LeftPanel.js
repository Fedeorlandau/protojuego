import React, { Component } from 'react';
import { Progress, Table } from 'reactstrap';
import './style.css';

export default class LeftPanel extends Component {
  render() {
    return (
      <div>
        <h3>Federico</h3>
        <div className="text-center">30%</div>
        <Progress value={30}/>
        <hr/>
        <h3>Ranking</h3>

        <a href="./Questions/projectManagment.html">PREGUNTAME</a>
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


