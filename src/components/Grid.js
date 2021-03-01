import React from "react";
import Square from "./Square";

const Grid = ({ grid }) => {
  return (
    <div className="grid-container">
      {grid.map((square, i) => (
        <Square square={square} key={i} />
      ))}
    </div>
  );
};

export default Grid;
