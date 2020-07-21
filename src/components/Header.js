import React, { Component } from 'react';
import './Header.css';
import todos from'./todos.png'
import 'bootstrap/dist/css/bootstrap.css';


class Header extends React.Component {

    render() {
        return (
        <div className= "container-block">
            <div><header className= "header">
                <div sm={6}><img className= "img-header-lg" src= {todos} width="300" height="74"></img></div>

                <div sm={6}><p className="titulo">  ...PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK...</p> </div>
            </header>
            </div>
            <div><span><p className="titulo">A JUGAR!!!</p></span></div>
                
         </div>
                
                

               
            

        );

    }
}
export default Header;