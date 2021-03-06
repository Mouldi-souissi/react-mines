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
    // setGrid(
    //   grid.map((square) =>
    //     square.x === x && square.y === y ? { ...square, hidden: false } : square
    //   )
    // );

    setGrid(gameEvents(grid, "left", square, gridSize));
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

  const openEmptySquares = (square) => {
    const squaresAround = (x, y) => {
      let squares = [
        { x: x + 1, y },
        { x: x - 1, y },
        { x, y: y + 1 },
        { x, y: y - 1 },
        { x: x + 1, y: y + 1 },
        { x: x - 1, y: y - 1 },
        { x: x + 1, y: y - 1 },
        { x: x - 1, y: y + 1 },
      ];
      return squares.filter(
        (square) =>
          square.x >= 0 &&
          square.y >= 0 &&
          square.x < gridSize &&
          square.y < gridSize
      );
    };
    if (square.inner === 0) {
      let squares = squaresAround(square.x, square.y);

      squares.map((el) => showSquare(el.x, el.y));
      // for (let i = 0; i < squares.length; i++) {
      //   for (let j = 0; j < grid.length; j++) {
      //     if (squares[i].x === grid[j].x && squares[i].y === grid[j].y) {
      //       setGrid(
      //         grid.map((sq) =>
      //           sq.x === grid[j].x && sq.y === grid[j].y
      //             ? { ...sq, hidden: false }
      //             : sq
      //         )
      //       );
      //     }
      //   }
      // }
    }
  };

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
          openEmptySquares={openEmptySquares}
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
