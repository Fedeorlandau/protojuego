import React, { Component } from 'react';
import ReactDOM from 'react-dom'
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

const App = () => (
    <Tree content="CASOS DE ESTUDIO" canHide open style={treeStyles}>
      <Tree content="TERADYNE" type={<span style={typeStyles}>🙀</span>} canHide />
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
  )

ReactDOM.render(<App />, document.getElementById('aplicacionGQM-container'))
