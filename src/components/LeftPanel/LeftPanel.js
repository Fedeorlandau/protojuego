import React, { Component } from 'react';
import { Progress } from 'reactstrap';
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
      </div>
    );
  }
}


