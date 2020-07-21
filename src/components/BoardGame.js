
import React, { Component, useState } from 'react';
import './BoardGame.css'
import papel from './papel.png'
import piedra from './piedra.png'
import tijera from './tijera.png'
import lagarto from './lagarto.png'
import spock from './spock.png'
import triste from './triste.png'
import contenedor from './contenedor.png'
import './Header.css'


 class BoardGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
      pointsComputer: 0,
      pointsPlayer: 0,
      selectCardComputer:null,
      selectCardPlayer: null,
      estadoJugada: "Haz click en una opcion para jugar",
      triste: triste,
      cards : [piedra, papel, tijera, lagarto, spock]
    }
  }

  handleClick() {
    this.setState({
      counter: 0, pointsComputer: 0, pointsPlayer: 0, selectCardComputer: null, selectCardPlayer: null
    })
  }


  // evaluar(player, computer) {
  //   if (this.gane(player, computer)) {
  //     this.ganaste()
  //   } if (this.perdi(player, computer)) {
  //     this.perdiste(player, computer)
  //   } else {
  //     this.empate()
  //   }
  // }

  evaluarJugada(numero) {
    this.gane(numero, this.selectCard())
    
    }
  

  soyPiedra() {
    return (this.state.selectCardPlayer === piedra)
  }
  soyPapel() {
    return (this.state.selectCardPlayer === papel)
  }
  soyTijera() {
    return (this.state.selectCardPlayer === tijera)
  }
  soyLagarto() {
    return (this.state.selectCardPlayer === lagarto)
  }
  soySpock() {
    return (this.state.selectCardPlayer === spock)
  }

  gane(player, computer) {
    if ((player === 0 && ((computer === 3) || (computer === 2)))
      || (player === 1 && ((computer === 0) || (computer === 4)))
      || (player === 2 && ((computer === 3) || (computer === 1)))
      || (player === 3 && ((computer === 1) || (computer === 4)))
      || (player === 4 && ((computer === 0) || (computer === 2)))) {
      this.ganaJugador()
    } else {
      this.perdi(player, computer)
    }
  }

  perdi(player, computer) {

    if ((computer === 0 && ((player === 3) || (player === 2)))
      || (computer === 1 && ((player === 0) || (player === 4)))
      || (computer === 2 && ((player === 3) || (player === 1)))
      || (computer === 3 && ((player === 1) || (player === 4)))
      || (computer === 4 && ((player === 0) || (player === 2)))) {
      this.ganaComputadora()
    } else {
      this.empate()
    }
  }

  empate() {
    this.setState(state => ({ estadoJugada: "Hubo un empate, intentalo nuevamente" }))
    console.log(this.state.selectCardComputer, this.state.selectCardPlayer)
  }

  ganaJugador() {
    this.setState(state => ({ pointsPlayer: state.pointsPlayer + 1 }))
    this.setState(state => ({ estadoJugada: "GANASTE!!!" }))
    console.log(this.state.selectCardComputer, this.state.selectCardPlayer)

  }

  ganaComputadora() {
    this.setState(state => ({ pointsComputer: state.pointsPlayer + 1 }))
    this.setState(state => ({ estadoJugada: "PERDISTE " + { triste } }))
    console.log(this.state.selectCardComputer, this.state.selectCardPlayer)
  }

  selectCard(numero) {
    let cards = [piedra, papel, tijera, lagarto, spock]
    let index = Math.floor(Math.random() * this.state.cards.length);
    let cardC = this.state.cards.splice(index, 1)[0]
    let cardP = cards[numero]
    this.setState(state => ({ selectCardPlayer: cardP }))
    this.setState(state => ({ selectCardComputer: cardC}))
    console.log("computadora" + index)
    console.log("player"+ numero)
    // return card;
  }

  render() {

    return (
      <div className="container">

        <div className="header-point-sm">
          <div sm={3}>
            PUNTOS PLAYER 1: <span> {this.state.pointsPlayer}</span>
          </div>
          <div sm={4}>
            PUNTOS PLAYER 2: <span> {Number(this.state.pointsComputer)} </span>
          </div>
        </div>
        <div sm={1}>
          <h1 className="header-point-m" >{this.state.estadoJugada}</h1>
        </div>

        <div className="container-block">
          <button className="contenedor-card-select"><img src={this.state.selectCardPlayer} width="150" height="150" /></button>
          <button className="btn-img" onClick={() => this.evaluarJugada(0)}><img src={piedra} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => this.evaluarJugada(1)}> <img src={papel} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => this.evaluarJugada(2)}> <img src={tijera} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => this.evaluarJugada(3)}> <img src={lagarto} className="contenedor-img" width="100" height="100" /></button>
          <button className="btn-img" onClick={() => this.evaluarJugada(4)}> <img src={spock} className="contenedor-img" width="100" height="100" /></button>
          <button className="contenedor-card-select"><img src={this.state.selectCardComputer} width="150" height="150" /></button>
        </div>
        <div>
          <button className="btn-reiniciar" onClick={this.handleClick.bind(this)}>
            Reiniciar Partida
          </button>
        </div>
      </div>


    );
  };

}
export default BoardGame;


  // gane() {
  //     if((this.soyPiedra() && ((this.state.selectCardComputer === lagarto) ||( this.state.selectCardComputer === tijera)))
  //       || (this.soyPapel() && (this.state.selectCardComputer === piedra || this.state.selectCardComputer === spock))
  //       || (this.soyTijera() && (this.state.selectCardComputer === lagarto || this.state.selectCardComputer === papel))
  //       || (this.soyLagarto() && (this.state.selectCardComputer === papel || this.state.selectCardComputer === spock)) 
  //       || (this.soySpock() && (this.state.selectCardComputer === piedra || this.state.selectCardComputer === tijera))) {
  //         this.ganaJugador()

  //     }
  // }

  // perdi() {
  //     if ((this.soyPiedra() && (this.state.selectCardComputer === papel || this.state.selectCardComputer === spock))
  //       || (this.soyPapel() && (this.state.selectCardComputer === tijera || this.state.selectCardComputer === lagarto))
  //       || (this.soyTijera() && (this.state.selectCardComputer === spock || this.state.selectCardComputer === piedra))
  //       || (this.soyLagarto() && (this.state.selectCardComputer === piedra || this.state.selectCardComputer === tijera)) 
  //       || (this.soySpock() && (this.state.selectCardComputer === papel || this.state.selectCardComputer === lagarto))) {
  //         this.pierdeJugador()

  //     }
  // }