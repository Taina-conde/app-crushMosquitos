import React, {Component} from 'react';
import '../App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './InitialMenu';
import PlayBtn from './PlayBtn';
import Game from './Game';


class App extends Component {
  state = {
    difficulty: "",
    lives: 3,
    isCrushed: false,
    mosquitoTime: [
      {
        id: "easy",
        time: 6000
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
  
  render() {
    const { 
      difficulty, 
      mosquitoTime,  
      mosquitoExists, 
      lives, 
      isCrushed } = this.state
    
    
    return (
      <div className="App">
        <Route
          exact path = "/"
          render = {() => (
            <div>
              <InitialMenu
                title = "Crush the Mosquitos"
                onSelectDifficulty = {this.selectDifficulty}
              />
              <PlayBtn
                difficulty = {difficulty}
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
            <div>
              <InitialMenu
               title = "You crushed them all!"
               onSelectDifficulty = {this.selectDifficulty}
              />
              <PlayBtn
                difficulty = {difficulty}
              />
            
            </div>
          )}
        />
        <Route/>
        <Route
          path = "/game-over"
          render = {() => (
            <div>
              <InitialMenu
                image = "Game over"
                subtitle = "You weren't fast enough! Maybe you will get them next time..."
                onSelectDifficulty = {this.selectDifficulty}
              />
              <PlayBtn
                difficulty = {difficulty}
              />
           
            </div>
          )}
        />
        <Route/>
      </div>
    );
  }
}

export default App;
