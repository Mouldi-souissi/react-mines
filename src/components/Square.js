import React, { useState } from "react";

const Square = ({ square, handleLose, lose }) => {
  // state
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);

  // handleclick
  const handleClick = () => {
    setShow(true);
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
      className={`cell ${(show || lose) && "active"} ${numColor()}`}
      onClick={handleClick}
      onContextMenu={() => setFlag(!flag)}
      type="button"
    >
      {show || lose ? (
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
