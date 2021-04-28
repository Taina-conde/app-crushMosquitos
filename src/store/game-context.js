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
  const [isCrushed, setIsCrused] = useState(false);
  const [mosquitoExists, setMosquitoExists] = useState(false);

  function selectDifficultyHandler(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
  }
  function loseLivesHandler() {
    setNumLives((previousNumLives) => {
      return previousNumLives - 1;
    });
  }
  function clickMosquitoHandler() {
    setIsCrused(true);
  }
  function toggleMosquitoExistsHandler() {
    setMosquitoExists((previousMosquitoExists) => {
      return !previousMosquitoExists;
    });
  }
  const context = {
    difficulty,
    lives,
    isCrushed,
    mosquitoExists,
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
