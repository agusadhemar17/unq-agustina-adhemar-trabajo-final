import React, { useState, useEffect, Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import './board.css';

import BoardGame from './BoardGame';


class Board extends Component {
    

    render() {
        return (
            <div>
                <div>
                    
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width="400" height="400"/>
                </div>
                <Router>
                    <div>
                    <button className="btn-reinciar" onClick = { BoardGame}>
                        Iniciar Partida
                    </button>
                                                

                    </div>
                </Router>

             
            </div>

        );
    }
}




export default Board;