import "./App.css";
import Grid from "./components/Grid";
import { useContext } from "react";
import { BombContext } from "./context/BombContext";
import Options from "./components/Options";
// import Timer from "./components/Timer";

function App() {
  // context
  const {
    grid,
    loss,
    win,
    startGame,
    start,
    setStart,
    totalBombs,
  } = useContext(BombContext);

  return (
    <div className="App container">
      <header className="App-header">
        <div className="d-flex">
          <h1 className="mb-5">Bombs</h1>
          <i
            className="fa fa-bomb"
            aria-hidden="true"
            style={{ color: "black", fontSize: "30px" }}
          />
        </div>
        {start ? (
          <div>
            <p>Total:{totalBombs}</p>
            <Grid grid={grid} />
            {loss && <p className="mt-2">GameOver</p>}
            {win && <p className="mt-2">You Win</p>}
            {(loss || win) && (
              <div className="mt-2 mb-5 row">
                <button
                  className="btn btn-secondary mb-3"
                  type="button"
                  onClick={() => setStart(false)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={startGame}
                >
                  NewGame
                </button>
              </div>
            )}
          </div>
        ) : (
          <Options />
        )}
      </header>
    </div>
  );
}

export default App;
