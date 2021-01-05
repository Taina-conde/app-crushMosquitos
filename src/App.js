import './App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './Components/InitialMenu';
import PlayBtn from './Components/PlayBtn';

function App() {
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
      <Route/>
      <Route/>
      <Route/>
    </div>
  );
}

export default App;
