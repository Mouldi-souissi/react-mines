import React from "react";
import Square from "./Square";

const Grid = ({ grid, handleLose, lose, showSquare }) => {
  return (
    <div className="container">
      <div className="grid small">
        {grid.map((square, i) => (
          <Square
            square={square}
            key={i}
            lose={lose}
            handleLose={handleLose}
            showSquare={showSquare}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
