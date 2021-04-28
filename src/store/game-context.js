import { createContext, useState } from 'react';

const GameContext = createContext({
    difficulty: "",
    lives: 3,
    isCrushed: false,
    mosquitoTime: [
        {
          id: "easy",
          time: 2000
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
    selectDifficulty : (diff) => {},
    clickMosquito : () => {},
    toggleMosquito : () => {},
    loseLives: () => {}
});

