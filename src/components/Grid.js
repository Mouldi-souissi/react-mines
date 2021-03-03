import React from "react";
import Square from "./Square";

const Grid = ({ grid, handleLose, lose }) => {
  return (
    <div className="container">
      <div className="grid big">
        {grid.map((square, i) => (
          <Square square={square} key={i} lose={lose} handleLose={handleLose} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
