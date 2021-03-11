import "./App.css";
import Grid from "./components/Grid";
import { useContext } from "react";
import { BombContext } from "./context/BombContext";
import Options from "./components/Options";
import Timer from "./components/Timer";

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

  // count number of bombs left
  const countBombsLeft = () => {
    let totalFlags = grid.filter((square) => square.flag).length;
    return loss || win ? totalBombs : totalBombs - totalFlags;
  };

  return (
    <div className="App container">
      <header className="App-header">
        <div className="d-flex mt-3">
          <h1 className="mb-5">Bombs</h1>
          <i
            className="fa fa-bomb"
            aria-hidden="true"
            style={{ color: "black", fontSize: "30px" }}
          />
        </div>
        {start ? (
          <div className="game mb-5">
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="mb-3 btn btn-warning btn-lg"
                style={{ borderRadius: "50%" }}
                onClick={startGame}
              >
                <i
                  className={`fa ${loss ? "fa-frown-o" : "fa-smile-o"}`}
                  style={{ color: "white", fontSize: "60px" }}
                />
              </button>
              {loss && <p className="text-danger">GameOver</p>}
              {win && <p className="text-success">You Win</p>}
            </div>

            <div className="d-flex justify-content-between">
              <Timer />

              <p>Total:{countBombsLeft()}</p>
            </div>
            <Grid grid={grid} />
            {(loss || win) && (
              <div className="mt-3 mb-5 row">
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
