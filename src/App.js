import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './Components/InitialMenu';
import PlayBtn from './Components/PlayBtn';
import Game from './Components/Game';

class App extends Component {
  state = {
    difficulty: ""

  }
  render() {
    return (
      <div className="App">
        <Route
          exact path = "/"
          render = {() => (
            <div>
              <InitialMenu/>
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
              <InitialMenu/>
            </div>
          )}
        />
        <Route/>
      </div>
    );
  }
}

export default App;
