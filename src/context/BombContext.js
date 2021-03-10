import React, { createContext, useState } from "react";
import gridGen from "../functions/gridGen";
import gameEvents from "../functions/gameEvents";

export const BombContext = createContext();

const BombContextProvider = (props) => {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [loss, setloss] = useState(false);
  const [win, setWin] = useState(false);
  const [gridSize, setGridSize] = useState(3);
  const [totalBombs, setTotalBombs] = useState(2);

  // set gridsize
  const handleGridsize = (size) => {
    setGridSize(size);
    let totalB = () => {
      switch (size) {
        case 3:
          return 2;
        case 5:
          return 5;
        case 10:
          return 60;
        default:
          return 3;
      }
    };
    setTotalBombs(totalB);
  };

  // right,left and double click events
  const clicks = (square, click) => {
    let result = gameEvents(grid, click, square, gridSize, totalBombs);
    setGrid(result.grid);
    setloss(result.loss);
    setWin(result.win);
  };

  // handle new game
  const startGame = () => {
    setWin(false);
    setloss(false);
    setGrid(gridGen(gridSize, totalBombs));
    setStart(true);
  };

  return (
    <BombContext.Provider
      value={{
        grid,
        clicks,
        loss,
        win,
        startGame,
        start,
        setStart,
        handleGridsize,
        gridSize,
        totalBombs,
      }}
    >
      {props.children}
    </BombContext.Provider>
  );
};
export default BombContextProvider;
