
import React, { useState } from 'react';
import './BoardGame.css'
import './Header.css'
import papel from './papel.png'
import piedra from './piedra.png'
import tijera from './tijera.png'
import lagarto from './lagarto.png'
import spock from './spock.png'
import contenedor from './contenedor.png'

 function BoardGame (){
        
    const [pointComputer,setPointComputer] = useState(0);
    const [pointPlayer,setPointPlayer] = useState(0);
    const [selectCardComputer,setSelectCardComputer] = useState(contenedor);
    const [selectCardPlayer,setSelectCardPlayer] = useState(contenedor);  
    const [estadoJugada,setEstadoJugada] = useState("Haz click en una opción para jugar");
    const cards = [piedra, papel, tijera, lagarto, spock];
 

  function gane(player, computer) {
    if ((player === 0 && ((computer === 3) || (computer === 2)))
      || (player === 1 && ((computer === 0) || (computer === 4)))
      || (player === 2 && ((computer === 3) || (computer === 1)))
      || (player === 3 && ((computer === 1) || (computer === 4)))
      || (player === 4 && ((computer === 0) || (computer === 2)))) {
     
        ganaJugador()
    
      } else {

      perdi(player, computer)
    
    }

  }

  function perdi(player, computer) {

    if ((computer === 0 && ((player === 3) || (player === 2)))
      || (computer === 1 && ((player === 0) || (player === 4)))
      || (computer === 2 && ((player === 3) || (player === 1)))
      || (computer === 3 && ((player === 1) || (player === 4)))
      || (computer === 4 && ((player === 0) || (player === 2)))) {
      ganaComputadora()
    } else {
      empate()
    }
  }
  function empate() {
    setEstadoJugada("Hubo un empate, intentalo nuevamente" + "😬");
    
  }

  function ganaJugador() {
    setPointPlayer(pointPlayer + 1);
    setEstadoJugada("GANASTE!!!" + "🥳");
    
  }

  function ganaComputadora() {
    setEstadoJugada("Perdiste!!!" + "😟");
    setPointComputer(pointComputer + 1); 
    
  }

  function setearYEvaluarJugada(numero) {
   
    let index = Math.floor(Math.random() * cards.length);
    let cardP = cards[numero];
    let cardC = cards[index];
    setSelectCardComputer(cardC);
    setSelectCardPlayer(cardP);
    gane(numero, index);
    
  }
  
  function setearTableroInicio(){
    setPointComputer(0);
    setPointPlayer(0);
    setSelectCardComputer(contenedor);
    setSelectCardPlayer(contenedor);
  }
  

    return (
      <div className="container">

<div  className = "header-point-sm" >
          <div>
            PUNTOS JUGADOR: <h3> {Number(pointPlayer)} </h3 >
          </div>
          <div>
            PUNTOS COMPUTADORA: 
            <h3>{ Number(pointComputer) }  </h3>
          </div>
        </div>
        <div >
          <h1 className = "header-point-m" > { estadoJugada } </h1>
        </div> 
       

        <div className="container-block">
          <button className="contenedor-card-select"><img src={selectCardPlayer} width="150" height="150" /></button>
          <button className="btn-img" onClick={() => {setearYEvaluarJugada(0)}}><img src={piedra} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {setearYEvaluarJugada(1)}}> <img src={papel} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {setearYEvaluarJugada(2)}}> <img src={tijera} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {setearYEvaluarJugada(3)}}> <img src={lagarto} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {setearYEvaluarJugada(4)}}> <img src={spock} className="contenedor-img" width="100" height="100" /></button>
          <button className="contenedor-card-select"><img src={selectCardComputer} width="150" height="150" /></button>
        </div>
        <div>
          <button className="btn-reiniciar" onClick={() =>{setearTableroInicio()}}>
            Reiniciar Partida
          </button>
        </div>
      </div>


    );
 

}

export default BoardGame;

