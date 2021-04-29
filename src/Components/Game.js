import React, { useEffect } from "react";
import GamePanel from "./GamePanel";
import Mosquito from "./Mosquito";
import { Redirect } from "react-router-dom";

const Game = (props) => {
  const {
    mosquitoExists,
    isCrushed,
    onClickMosquito,
    onLoseLives,
    difficulty,
    mosquitoTime,
    onToggleMosquito,
    lives,
  } = props;
  useEffect(() => {
    const selectedLevel = mosquitoTime.filter(
      (diffLevel) => difficulty === diffLevel.id
    );
    if (selectedLevel[0]) {
      const time = selectedLevel[0].time;
      console.log('time: ', time)
      const createMosquito = setInterval(() => {
        if (lives === 0) {
          clearInterval(createMosquito);
        }
        onToggleMosquito();
        return () => clearInterval(createMosquito)
      }, time);
      return () => clearInterval(createMosquito)
    }
    
  }, [mosquitoTime]);

  if (lives === 0) {
    return <Redirect to="/game-over" />;
  }

  return (
    <div>
      {mosquitoExists && (
        <Mosquito
          difficulty={difficulty}
          onClickMosquito={onClickMosquito}
          isCrushed={isCrushed}
          onLoseLives={onLoseLives}
          mosquitoExists={mosquitoExists}
        />
      )}
      <GamePanel lives={lives} />
    </div>
  );
};

export default Game;
