import React from "react";

const Grid = ({ grid }) => {
  return (
    <div className="grid-container">
      {grid.map((square, i) => (
        <div className="grid-item" key={i}>
          {square.inner === "bomb" ? "b" : square.inner}
        </div>
      ))}
    </div>
  );
};

export default Grid;
