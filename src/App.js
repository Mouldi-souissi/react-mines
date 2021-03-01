import "./App.css";
import Grid from "./components/Grid";
import gridGen from "./functions/gridGen";
import { useState, useEffect } from "react";

function App() {
  // state
  const [grid, setGrid] = useState([]);
  // effect
  useEffect(() => {
    let grid = gridGen(3, 3);

    setGrid(grid);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bombs</h1>
        <Grid grid={grid} />
      </header>
    </div>
  );
}

export default App;
