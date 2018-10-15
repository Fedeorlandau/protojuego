import React, { Component } from 'react';
import { Progress, Table, Button } from 'reactstrap';
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
        <div class="row">
          <div class="col-sm-5"><h3>{User.getName()}</h3></div>
          <div class="col-sm-3"><img style={{"height":"95%"}} alt="profile" src="/assets/profile.png"></img></div>
        </div>
        
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
          <tr>
            <td><input type="button" onClick={()=>User.updateProgress("GQM")} value="click me"/> </td>
            <td>10</td>
            <td>599</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


