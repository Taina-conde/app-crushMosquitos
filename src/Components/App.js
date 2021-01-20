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
        time: 4000
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
  redirect: false

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
    if (this.state.lives > 0 && this.state.isCrushed === true) {
      this.setState({
        mosquitoExists: !this.state.mosquitoExists,
        isCrushed: false
      })
    } else if (this.state.lives > 0) {
      this.setState({
        mosquitoExists: !this.state.mosquitoExists,
        lives: this.state.lives - 1,
      })
    } else {
      this.setState( {
        redirect: true
    })
  }
    
  }
  
  render() {
    const { difficulty, mosquitoTime, redirect, mosquitoExists, lives, isCrushed } = this.state
    
    
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
                onToggleMosquito = {this.toggleMosquito}
                redirect = {redirect} 
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
