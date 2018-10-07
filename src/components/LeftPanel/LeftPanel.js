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

        <Table>
          <thead>
          </thead>
          <tbody>
          <tr>
            <td>Jugador</td>
            <td>Nivel</td>
            <td>Puntos</td>
          </tr>
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


