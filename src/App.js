import "./App.css";
import Grid from "./components/Grid";
import { useContext } from "react";
import { BombContext } from "./context/BombContext";

function App() {
  const { grid, lose, win, newGame } = useContext(BombContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bombs</h1>
        <Grid grid={grid} />
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
