import "./App.css";
import Grid from "./components/Grid";
import gridGen from "./functions/gridGen";
import { useState, useEffect } from "react";

function App() {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  // show clicked square
  const showSquare = (x, y) => {
    setGrid(
      grid.map((square) =>
        square.x === x && square.y === y ? { ...square, hidden: false } : square
      )
    );
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
      grid.filter((square) => square.hidden === false).length === 9 - 3 &&
      !lose
    ) {
      setWin(true);
    }
    console.log(grid.filter((square) => square.hidden === false).length);
  };

  // start newGame
  const newGame = () => {
    setWin(false);
    setStart(!start);
    setLose(false);
    setGrid([]);
  };

  // effect
  useEffect(() => {
    let grid = gridGen(3, 3);

    setGrid(grid);
  }, [start]);
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
