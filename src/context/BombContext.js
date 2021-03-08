import React, { createContext, useState, useEffect } from "react";
import gridGen from "../functions/gridGen";
import gameEvents from "../functions/gameEvents";

export const BombContext = createContext();

const BombContextProvider = (props) => {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const gridSize = 5;
  const totalBombs = 3;

  // right,left and double click events
  const clicks = (square, click) => {
    setGrid(gameEvents(grid, click, square, gridSize));
  };

  // handle lose
  const handleLose = (square) => {
    if (square.inner === "bomb") {
      setLose(true);
      // setGrid(grid.map((el) => el.hidden = false));
    }
  };

  // handle new game
  const newGame = () => {
    setWin(false);
    setStart(!start);
    setLose(false);
    setGrid([]);
  };

  // effect generate grid
  useEffect(() => {
    let grid = gridGen(gridSize, totalBombs);
    setGrid(grid);
  }, [start]);

  // effect win
  useEffect(() => {
    const handleWin = () => {
      if (
        grid.filter((square) => square.hidden === false).length ===
          Math.pow(gridSize, 2) - totalBombs &&
        !lose
      ) {
        setWin(true);
      }
    };
    handleWin();
  }, [grid, lose]);

  return (
    <BombContext.Provider
      value={{ grid, clicks, handleLose, lose, win, newGame }}
    >
      {props.children}
    </BombContext.Provider>
  );
};
export default BombContextProvider;
