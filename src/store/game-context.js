import { createContext, useState } from "react";

const GameContext = createContext({
  difficulty: "",
  lives: 3,
  isCrushed: false,
  mosquitoExists: false,
  mosquitoTime: [
    {
      id: "easy",
      time: 2000,
    },
    {
      id: "normal",
      time: 1300,
    },
    {
      id: "hard",
      time: 900,
    },
  ],
  selectDifficulty: (diff) => {},
  clickMosquito: () => {},
  toggMosquitoExists: () => {},
  loseLives: () => {},
});

export function GameContextProvider(props) {
  const [difficulty, setDifficulty] = useState("");
  const [lives, setNumLives] = useState(3);
  const [mosquitoState, setMosquitoState] = useState({
      isCrushed: false,
      mosquitoExists: false,
  });
  

  function selectDifficultyHandler(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
  }
  function loseLivesHandler() {
    setNumLives((previousNumLives) => {
      return previousNumLives - 1;
    });
  }
  function clickMosquitoHandler() {
    if (mosquitoState.isCrushed === false ) {
        setMosquitoState({
            ...mosquitoState,
            isCrushed: true,
        });
    }
  }
  function toggleMosquitoExistsHandler() {
    setMosquitoState((previousMosquitoState) => ({
      isCrused: false,
      mosquitoExists: !previousMosquitoState.mosquitoExists
    }));
  }
  const context = {
    difficulty,
    lives,
    isCrushed: mosquitoState.isCrushed,
    mosquitoExists: mosquitoState.mosquitoExists,
    selectDifficulty: selectDifficultyHandler,
    clickMosquito: clickMosquitoHandler,
    toggMosquitoExists: toggleMosquitoExistsHandler,
    loseLives: loseLivesHandler,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;
