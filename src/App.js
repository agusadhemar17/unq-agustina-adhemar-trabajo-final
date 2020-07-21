import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Board from './components/Board'

import BoardGame from './components/BoardGame';


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <Header ></Header>
        {/* <Board /> */}
        <BoardGame />
      </div>
      
    );
  }
}

 export default App;
