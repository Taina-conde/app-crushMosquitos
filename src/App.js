import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './Components/InitialMenu';
import PlayBtn from './Components/PlayBtn';
import Game from './Components/Game';

class App extends Component {
  state = {
    difficulty: "easy"

  }
  selectDifficulty = (diff) => {
    this.setState({difficulty: diff})
  }
  render() {
    return (
      <div className="App">
        <Route
          exact path = "/"
          render = {() => (
            <div>
              <InitialMenu
                title = "Crush the Mosquitos"
              />
              <PlayBtn/>
            </div>
          )}/>
        <Route
          path = "/game"
          render = {() => (
            <div>
              <Game
                difficulty = {this.state.difficulty}
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
            </div>
          )}
        />
        <Route/>
      </div>
    );
  }
}

export default App;
