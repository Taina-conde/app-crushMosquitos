import React, {Component} from 'react';
import '../App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './InitialMenu';
import Level from './Level';
import PlayBtn from './PlayBtn';
import BackBtn from './BackBtn';
import Game from './Game';


class App extends Component {
  state = {
    difficulty: "easy",
    lives: 3,
    isCrushed: false,
    mosquitoTime: [
      {
        id: "easy",
        time: 2000
      },
      {
        id: "normal",
        time: 1300
      },
      {
        id: "hard",
        time: 900
      }
  ],
  mosquitoExists: false,
 

  }
  selectDifficulty = (diff) => {
    this.setState({difficulty: diff})
  }
  clickMosquito = () => {
    if (this.state.isCrushed === false) {
      this.setState({
        isCrushed: true,
      })
    }
  }
  toggleMosquito = () => {
    const {mosquitoExists} = this.state
    this.setState({
      mosquitoExists: !mosquitoExists,
      isCrushed: false
    })
  }
  handleLoseLives = () => {
    const {lives} = this.state
    this.setState({
      lives: lives - 1
    })
  }
  resetGame =() =>{
    this.setState({
      lives: 3,
      isCrushed: false,
      mosquitoExists: false,
      difficulty: "easy"
  
    })
  }
  
  render() {
    const { 
      difficulty, 
      mosquitoTime,  
      mosquitoExists, 
      lives, 
      isCrushed } = this.state
    
    
    return (
      <div className = 'App'>
        <Route
          exact path = "/"
          render = {() => (
            <div className = 'container'>
              <InitialMenu
                title = "Crush the Mosquitos"
                
              />
              <Level
                onSelectDifficulty = {this.selectDifficulty}
                
              />
              <PlayBtn
                difficulty = {difficulty}
                onResetGame = {this.resetGame}
                
              />
            </div>
          )}/>
        <Route
          path = "/game"
          render = {() => (
            <div>
              <Game
                difficulty = {difficulty}
                lives = {lives}
                onClickMosquito = {this.clickMosquito}
                mosquitoTime = {mosquitoTime}
                mosquitoExists = {mosquitoExists}
                isCrushed = {isCrushed}
                onToggleMosquito = {this.toggleMosquito}
                onLoseLives = {this.handleLoseLives}
                
                 
              />
            </div>
          )}  
        />
        <Route
          path = "/victory"
          render = {() => (
            <div  className = 'container'>
              <InitialMenu
               title = "You crushed them all!"
              />
              <PlayBtn
                difficulty = {difficulty}
                onResetGame = {this.resetGame}
              />
            
            </div>
          )}
        />
        <Route/>
        <Route
          path = "/game-over"
          render = {() => (
            <div  className = 'container'>
              <InitialMenu
                image = "Game over"
                subtitle = "You weren't fast enough! Maybe next time..."
                onSelectDifficulty = {this.selectDifficulty}
              />
              <BackBtn  onResetGame = {this.resetGame}/>
           
            </div>
          )}
        />
        <Route/>
      </div>
    );
  }
}

export default App;
