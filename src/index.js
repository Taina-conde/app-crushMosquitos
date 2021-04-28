import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

import { GameContextProvider } from './store/game-context'


ReactDOM.render(
 <GameContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GameContextProvider>
  ,
  document.getElementById('root')
);


