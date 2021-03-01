import React, { useState } from "react";

const Square = ({ square }) => {
  // state
  const [show, setShow] = useState(false);
  return (
    <div
      className={`grid-item ${square.inner === "bomb" ? "bomb" : "num"}`}
      onClick={() => setShow(true)}
    >
      {show ? (square.inner === "bomb" ? "B" : square.inner) : " "}
    </div>
  );
};
export default Square;
