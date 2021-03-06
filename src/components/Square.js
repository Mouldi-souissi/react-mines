import React, { useState } from "react";

const Square = ({ square, handleLose, lose, showSquare, openEmptySquares }) => {
  // state
  const [flag, setFlag] = useState(false);

  // handleclick
  const handleClick = () => {
    // setShow(true);
    showSquare(square);
    handleLose(square.inner);
    // openEmptySquares(square);
  };

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
      className={`cell ${(!square.hidden || lose) && "active"} ${numColor()}`}
      onClick={handleClick}
      onContextMenu={() => setFlag(!flag)}
      type="button"
    >
      {!square.hidden || lose ? (
        square.inner === "bomb" ? (
          <i
            className="fa fa-bomb"
            aria-hidden="true"
            style={{ color: "black", fontSize: "30px" }}
          />
        ) : (
          square.inner
        )
      ) : flag ? (
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
