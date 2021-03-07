import React from "react";
import Square from "./Square";

const Grid = ({ grid, handleLose, lose, showSquare, flag, openFlags }) => {
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
            flag={flag}
            openFlags={openFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
