
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
        
    const [puntajeComputadora,setPuntajeComputadora] = useState(10);
    const [selectCardComputer,setSelectCardComputer] = useState();
    const [selectCardPlayer,setSelectCardPlayer] = useState();  
    const [estadoJugada,setEstadoJugada] = useState("Haz click en una opción para jugar");
    const [puntajeJugador,setPuntajeJugador] = useState(10);
    

  function selectCard(numero) {
    let cards = [piedra, papel, tijera, lagarto, spock]
    let index = Math.floor(Math.random() * cards.length);
    let cardC = cards[index];
    let cardP = cards[numero];
    setSelectCardComputer(cardC);
    setSelectCardPlayer(cardP);
    console.log("computadora" + index)
    console.log("player"+ numero)
    return index;
  }

  function evaluarJugada(numero) {
    selectCard(numero)
    gane(numero,selectCard(numero))
    
  }
  
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
    setPuntajeJugador(puntajeJugador + 1);
    setEstadoJugada("GANASTE!!!" + "🥳");
  }

  function ganaComputadora() {
    setEstadoJugada("Perdiste!!!" + "😟");
    setPuntajeComputadora(puntajeComputadora + 1); 
    
  }

  function setearTableroInicio(){
    setPuntajeComputadora(10);
    setPuntajeJugador(10);
    setSelectCardComputer(contenedor);
    setSelectCardPlayer(contenedor);
  }
  

    return (
      <div className="container">

        <div className="header-point-sm">
          <div >
            PUNTOS PLAYER 1: <span> {puntajeJugador}</span>
          </div>
          <div>
            PUNTOS PLAYER 2: <span> {puntajeComputadora} </span>
          </div>
        </div>
        <div >
          <h1 className="header-point-m">{estadoJugada}</h1>
        </div>

        <div className="container-block">
          <button className="contenedor-card-select"><img src={selectCardPlayer} width="150" height="150" /></button>
          <button className="btn-img" onClick={() => {evaluarJugada(0)}}><img src={piedra} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {evaluarJugada(1)}}> <img src={papel} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {evaluarJugada(2)}}> <img src={tijera} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {evaluarJugada(3)}}> <img src={lagarto} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => {evaluarJugada(4)}}> <img src={spock} className="contenedor-img" width="100" height="100" /></button>
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

