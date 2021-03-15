import React, { useContext } from "react";
import { BombContext } from "../context/BombContext";

const Options = () => {
  // context
  const { startGame, handleGridsize, gridSize } = useContext(BombContext);

  const handleChange = (e) => {
    handleGridsize(Number(e.target.value));
  };
  return (
    <div className="d-flex flex-column col-6 mx-auto mt-5">
      <div className="mode-options ">
        <div className="mb-3">Choose mode :</div>
        <select
          className="form-select"
          name="mode"
          defaultValue={gridSize}
          onChange={handleChange}
        >
          <option value="3">easy</option>
          <option value="5">medium</option>
          <option value="10">hard</option>
        </select>
      </div>

      <button
        type="button"
        className="btn btn-primary mt-5"
        onClick={startGame}
      >
        Start
      </button>
    </div>
  );
};

export default Options;
