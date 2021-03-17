import React, { useContext } from "react";
import { BombContext } from "../context/BombContext";
import Square from "./Square";

const Grid = ({ grid }) => {
  const { gridSize } = useContext(BombContext);

  // set grid size style
  const gridStyle = () => {
    switch (gridSize && gridSize) {
      case 3:
        return "small";
      case 5:
        return "medium";
      case 10:
        return "big";
      default:
        return "small";
    }
  };

  return (
    <div className="container-grid ">
      <div className={`grid ${gridStyle()} `}>
        {grid.map((square, i) => (
          <Square square={square} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
