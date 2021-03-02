import React, { useState } from "react";
import Square from "./Square";

const Grid = ({ grid }) => {
  const [lose, setLose] = useState(false);
  const handleLose = (inner) => {
    if (inner === "bomb") {
      setLose(true);
    }
  };
  return (
    <div className="container">
      <div className="grid">
        {grid.map((square, i) => (
          <Square square={square} key={i} lose={lose} handleLose={handleLose} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
