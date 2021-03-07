import React from "react";

const Square = ({ square, handleLose, lose, showSquare, flag, openFlags }) => {
  // handleclick
  const handleClick = () => {
    showSquare(square);
    handleLose(square.inner);
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
      onContextMenu={() => flag(square)}
      onDoubleClick={() => openFlags(square)}
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
