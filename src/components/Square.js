import React, { useState } from "react";

const Square = ({ square }) => {
  // state
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);

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
    }
  };

  return (
    <button
      className={`cell ${square.inner === "bomb" ? "bomb" : "num"} ${
        show && "active"
      } ${numColor()}`}
      onClick={() => setShow(true)}
      onContextMenu={() => setFlag(!flag)}
    >
      {show ? (
        square.inner === "bomb" ? (
          <i class="fa fa-bomb" aria-hidden="true" />
        ) : (
          square.inner
        )
      ) : flag ? (
        <i class="fa fa-flag" aria-hidden="true" style={{ color: "grey" }} />
      ) : (
        " "
      )}
    </button>
  );
};
export default Square;
