import "./App.css";
import Grid from "./components/Grid";
import gridGen from "./functions/gridGen";
import { useState, useEffect } from "react";
import gameEvents from "./functions/gameEvents";

function App() {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const gridSize = 5;

  // show clicked square
  const showSquare = (square) => {
    setGrid(gameEvents(grid, "left", square, gridSize));
  };
  // put flag
  const flag = (square) => {
    setGrid(gameEvents(grid, "right", square, gridSize));
  };
  // open !flag
  const openFlags = (square) => {
    setGrid(gameEvents(grid, "double", square, gridSize));
  };

  // revealing the grid after clicking on a bomb
  const handleLose = (inner) => {
    if (inner === "bomb") {
      setLose(true);
    }
  };

  // win
  const winHandler = () => {
    if (
      grid.filter((square) => square.hidden === false).length === 25 - 3 &&
      !lose
    ) {
      setWin(true);
    }
  };

  // start newGame
  const newGame = () => {
    setWin(false);
    setStart(!start);
    setLose(false);
    setGrid([]);
  };

  // effect generate grid
  useEffect(() => {
    let grid = gridGen(gridSize, 3);

    setGrid(grid);
  }, [start]);

  // effect win
  useEffect(() => {
    winHandler();
  }, [grid]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bombs</h1>
        <Grid
          grid={grid}
          start={start}
          handleLose={handleLose}
          lose={lose}
          showSquare={showSquare}
          flag={flag}
          openFlags={openFlags}
        />
        {lose && <p>GameOver</p>}
        {win && <p>You Win</p>}
        {(lose || win) && (
          <button
            type="button"
            style={{ fontSize: "20px", marginTop: "10px", padding: "10px" }}
            onClick={newGame}
          >
            New game
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
