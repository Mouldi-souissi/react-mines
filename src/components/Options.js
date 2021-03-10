import React, { useContext } from "react";
import { BombContext } from "../context/BombContext";

const Options = () => {
  // context
  const { startGame, handleGridsize } = useContext(BombContext);

  // handle options
  const handleChange = (e) => {
    handleGridsize(Number(e.target.value));
  };
  return (
    <div className="container">
      <div className="mode-options col-6 mx-auto" onChange={handleChange}>
        <div className="mb-3">Choose mode :</div>
        <select className="form-select" name="mode">
          <option Value="3">easy</option>
          <option value="5">medium</option>
          <option value="10">hard</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-5 col-4"
        onClick={startGame}
      >
        Start
      </button>
    </div>
  );
};

export default Options;
