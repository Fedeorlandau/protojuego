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
        <div className="row">
          <div className="col-sm-5"><h3>{User.getName()}</h3></div>
          <div className="col-sm-3"><img style={{"height":"95%"}} alt="profile" src="/assets/profile.png"></img></div>
        </div>
        
        <div className="text-center">{this.state.progress}%</div>
        <Progress value={this.state.progress}/>
        <hr/>
        <h3>Ranking</h3>
        <Table>
          <thead>
          <tr>
            <th>Jugador</th>
            <th>Completo</th> 
          </tr>
          </thead>
          <tbody>
          {
            User.getRanking().items.map(( listValue, index ) => {
            return (
              <tr key={index}>
                <td>{listValue.username}</td>
                <td>{listValue.completed}%</td> 
              </tr>
            );
            })
          }
          </tbody>
        </Table>
      </div>
    );
  }
}


