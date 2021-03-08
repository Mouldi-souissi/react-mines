import React, { useContext } from "react";
import { BombContext } from "../context/BombContext";

const Square = ({ square }) => {
  const { clicks, loss, win } = useContext(BombContext);

  // handleclick
  const handleClick = (click) => {
    if (!win && !loss) {
      clicks(square, click);
    }
  };

  // styling numbers
  const numColor = () => {
    switch (square.inner) {
      case 0:
        return "transparent";
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "red";
      default:
        return "red";
    }
  };

  return (
    <button
      className={`cell ${(!square.hidden || loss) && "active"} ${numColor()}`}
      onClick={() => handleClick("left")}
      onContextMenu={() => handleClick("right")}
      onDoubleClick={() => handleClick("double")}
      type="button"
    >
      {!square.hidden || loss ? (
        square.inner === "bomb" ? (
          <i
            className="fa fa-bomb"
            aria-hidden="true"
            style={{ color: "black", fontSize: "30px" }}
          />
        ) : (
          square.inner
        )
      ) : square.flag ? (
        <i
          className="fa fa-flag"
          aria-hidden="true"
          style={{ color: "black", fontSize: "25px" }}
        />
      ) : (
        " "
      )}
    </button>
  );
};
export default Square;
