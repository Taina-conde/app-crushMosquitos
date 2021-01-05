import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './Components/InitialMenu';
import PlayBtn from './Components/PlayBtn';
import Game from './Components/Game';

class App extends Component {
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
              <Game/>
            </div>
          )}  
        />
        <Route/>
        <Route/>
      </div>
    );
  }
}

export default App;
