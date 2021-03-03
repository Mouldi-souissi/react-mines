import "./App.css";
import Grid from "./components/Grid";
import gridGen from "./functions/gridGen";
import { useState, useEffect } from "react";

function App() {
  // state
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
  const [lose, setLose] = useState(false);

  // show clicked square

  // revealing the grid after clicking on a bomb
  const handleLose = (inner) => {
    if (inner === "bomb") {
      setLose(true);
    }
  };

  // start newGame
  const newGame = () => {
    setStart(!start);
    setLose(false);
    setGrid([]);
  };

  // effect
  useEffect(() => {
    let grid = gridGen(9, 9);

    setGrid(grid);
  }, [start]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bombs</h1>
        <Grid grid={grid} start={start} handleLose={handleLose} lose={lose} />
        {lose && <p>GameOver</p>}
        {lose && (
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
