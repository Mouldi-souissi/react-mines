import React from "react";
import Square from "./Square";

const Grid = ({ grid }) => {
  return (
    <div className="container">
      <div className="grid small">
        {grid.map((square, i) => (
          <Square square={square} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
