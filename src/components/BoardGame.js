
import React, { Component, useState } from 'react';
import './BoardGame.css'
import papel from './papel.png'
import piedra from './piedra.png'
import tijera from './tijera.png'
import contenedor from './contenedor.png'
import './Header.css'



class BoardGame extends React.Component {
  constructor(props) {
    super(props)
  
       
    this.state = {
      counter: 0,
      pointsComputer: 0,
      pointsPlayer: 0,
      selectCardComputer: contenedor,
      selectCardPlayer: contenedor,
       option: 0
    }
    
  }
 

handleClick () {
  this.setState({counter: 0, pointsComputer: 0,pointsPlayer:0,  selectCardComputer: contenedor,
    selectCardPlayer: contenedor})
}
  

  render() {
  
    return (
      <div >
             
        <div className="header-point-sm">
          PUNTOS PLAYER 1
          <span>{this.state.pointsPlayer}</span>
          Partidas:<span>{this.state.counter}</span>
          Puntos Player 2<span>{this.state.pointsComputer}</span>
        </div>
       
        <h1 >Haz click en una opcion para jugar</h1>
          <button className="contenedor-card-select"><img src={this.state.selectCardPlayer}  width="200" height="200" /></button>
          <button className="btn-img" onClick={this.piedra.bind(this) }><img src={piedra} className="contenedor-img" width="150" height="150" alt="piedra"/></button>
          <button className="btn-img" onClick={this.papel.bind(this)}> <img src={papel} className="contenedor-img" width="150" height="150" /></button>
          <button className="btn-img"  onClick={this.tijera.bind(this)}> <img src={tijera} className="contenedor-img" width="150" height="150" /></button>
          <button className="contenedor-card-select"><img src={this.state.selectCardComputer}  width="200" height="200" alt ="foto"/></button>
          
        <div>
          <button className="btn-reiniciar" onClick={this.handleClick.bind(this)}>
            Reiniciar Partida
          </button>
        </div>


</div>
    );
  };

  selectCard () {
    const cards = [piedra, papel,tijera];
    const index = Math.floor(Math.random() * cards.length);
    const card = cards.splice(index,1)[0]
    return card;  
  }
piedra(){
  this.setState({selectCardPlayer:piedra, selectCardComputer:this.selectCard()})
  this.setState({option:1})
  this.evaluarJugadaPiedra()
  
}
papel(){
  this.setState({selectCardPlayer:papel, selectCardComputer:this.selectCard()})
  // this.evaluarJugadaPapel()
}
tijera(){
  this.setState({selectCardPlayer:tijera, selectCardComputer:this.selectCard()})
  // this.evaluarJugadaTijera()
}


evaluarJugadaPiedra( ){
  if (this.state.selectCardComputer === papel){
   this.perdiste()
   console.log(this.state.selectCardComputer == papel)
  // alert(this.state.selectCardComputer === papel)
   
    }  if (this.state.selectCardComputer === tijera) {
   this.ganaste() 
   console.log(this.state.selectCardComputer === tijera)
  } if (this.state.selectCardComputer === piedra) {
    console.log("empate")
    console.log(this.state.selectCardComputer === piedra)
} }

// evaluarJugadaPapel( ){
//   if (this.state.selectCardComputer == tijera){
//     this.perdiste()
  
//     }  if (this.state.selectCardComputer == piedra ) {
//     this.ganaste()
//     } if (this.state.selectCardComputer == papel) {
//       console.log("empate")
// } }
  
// evaluarJugadaTijera( ){
//   if (this.state.selectCardComputer == piedra){
//     this.perdiste()
 
//     }  if (this.state.selectCardComputer == papel ) {
//      this.ganaste()
  
//     } if (this.state.selectCardComputer == tijera) {
//       console.log("empate")
// } }
  


// // evaluarJugadaPiedra( ){
// //   if (this.state.selectCardComputer == papel){
// //    this.perdiste()
// //    console.log(this.state.selectCardComputer == papel)
   
// //     }  if (this.state.selectCardComputer == tijera) {
// //    this.ganaste() 
// //    console.log(this.state.selectCardComputer == tijera)
// //   } if (this.state.selectCardComputer == piedra) {
// //     console.log("empate")
// //     console.log(this.state.selectCardComputer == piedra)
// // } }

// // evaluarJugadaPapel( ){
// //   if (this.state.selectCardComputer == tijera){
// //     this.perdiste()
  
//     }  if (this.state.selectCardComputer == piedra ) {
//     this.ganaste()
//     } if (this.state.selectCardComputer == papel) {
//       console.log("empate")
// } }
  
// evaluarJugadaTijera( ){
//   if (this.state.selectCardComputer == piedra){
//     this.perdiste()
 
//     }  if (this.state.selectCardComputer == papel ) {
//      this.ganaste()
  
//     } if (this.state.selectCardComputer == tijera) {
//       console.log("empate")
// } }
  


ganaste (){
  this.setState({pointsPlayer:this.state.pointsPlayer + 1})
  console.log("ganaste")
}
perdiste(){
  this.setState({ pointerComputer: this.state.pointsComputer + 1 })
  console.log("perdiste")
}
}
export default BoardGame;

