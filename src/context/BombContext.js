import React, { createContext, useState, useEffect } from "react";
import gridGen from "../functions/gridGen";
import gameEvents from "../functions/gameEvents";

export const BombContext = createContext();

const BombContextProvider = (props) => {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [loss, setloss] = useState(false);
  const [win, setWin] = useState(false);
  const gridSize = 5;
  const totalBombs = 3;

  // right,left and double click events
  const clicks = (square, click) => {
    let result = gameEvents(grid, click, square, gridSize, totalBombs);
    setGrid(result.grid);
    setloss(result.loss);
    setWin(result.win);
  };

  // handle new game
  const newGame = () => {
    setWin(false);
    setStart(!start);
    setloss(false);
    setGrid([]);
  };

  // effect generate grid
  useEffect(() => {
    let grid = gridGen(gridSize, totalBombs);
    setGrid(grid);
  }, [start]);

  return (
    <BombContext.Provider value={{ grid, clicks, loss, win, newGame }}>
      {props.children}
    </BombContext.Provider>
  );
};
export default BombContextProvider;
