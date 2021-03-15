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
    <div className="App">
      <div className="container">
        <div className="d-flex mt-3 ">
          <h1 className="mb-5">Bombs</h1>
          <i
            className="fa fa-bomb"
            aria-hidden="true"
            style={{ color: "black", fontSize: "30px" }}
          />
        </div>
        <div className="row">
          {start ? (
            <div className="game mb-5 d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-between col-8 mx-auto">
                <Timer />
                <button
                  className="mb-3 btn btn-warning btn-lg position-absolute top-5 start-50 translate-middle"
                  style={{ borderRadius: "30%" }}
                  onClick={startGame}
                >
                  <i
                    className={`fa ${loss ? "fa-frown-o" : "fa-smile-o"}`}
                    style={{ color: "white", fontSize: "40px" }}
                  />
                </button>
                <p>Total:{countBombsLeft()}</p>
              </div>
              {loss && <p className="text-danger">GameOver</p>}
              {win && <p className="text-success">You Win</p>}
              <Grid grid={grid} />
              {(loss || win) && (
                <div className="newgame">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setStart(false)}
                    style={{ marginRight: "8px" }}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
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
        </div>
      </div>
    </div>
  );
}

export default App;
