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
            <th>Completado</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Federico</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Videla</td>
            <td>66%</td>
            <td></td>
          </tr>
          <tr>
            <td>Matías</td>
            <td>33%</td>
            <td></td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


