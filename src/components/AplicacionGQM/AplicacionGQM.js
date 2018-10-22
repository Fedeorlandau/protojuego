import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import Tree from 'react-animated-tree'

const treeStyles = {
  position: 'absolute',
  top: 40,
  left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}


export default class AplicacionGQMComponent extends Component {
  render() {
    return (
    <div>
      <Tree content="CASOS DE ESTUDIO" canHide open style={treeStyles}>
        <Tree content="TERADYNE" type={<span role="img" aria-labelledby="panda1" style={typeStyles}>🙀</span>} canHide />
        <Tree content="FVL" canHide>
          <Tree content="GOAL">
            <Tree content="PROBLEMA 1" style={{ color: '#63b1de' }}>
              <Tree content="METRICA 1" canHide />
              <Tree content="METRICA 2" canHide />
              <Tree content="METRICA 3" canHide />
            </Tree>
            <Tree content="PROBLEMA 2" style={{ color: '#63b1de' }}>
              <Tree content="METRICA 1" canHide />
              <Tree content="METRICA 2" canHide />
              <Tree content="METRICA 3" canHide />
            </Tree>
            <Tree content="PROBLEMA 3" style={{ color: '#63b1de' }}>
              <Tree content="METRICA 1" canHide />
              <Tree content="METRICA 2" canHide />
              <Tree content="METRICA 3" canHide />
            </Tree>
            <Tree content="PROBLEMA 4" style={{ color: '#63b1de' }}>
              <Tree content="METRICA 1" canHide />
              <Tree content="METRICA 2" canHide />
              <Tree content="METRICA 3" canHide />
            </Tree>
            <Tree content="PROBLEMA 5" style={{ color: '#63b1de' }}>
              <Tree content="METRICA 1" canHide />
              <Tree content="METRICA 2" canHide />
              <Tree content="METRICA 3" canHide />
            </Tree>
          </Tree>
        </Tree>
        <Tree content="CISCO" canHide />
      </Tree>
    </div>
    );
  }
}

