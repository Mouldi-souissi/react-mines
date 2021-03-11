import React, { useEffect, useContext } from "react";
import { BombContext } from "../context/BombContext";

const Timer = () => {
  const { win, loss, incrementTimer, seconds } = useContext(BombContext);

  useEffect(() => {
    let interval = null;
    if (!(loss || win)) {
      interval = setInterval(() => {
        incrementTimer((seconds) => seconds + 1);
      }, 1000);
    } else if ((loss || win) && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [win, loss, seconds, incrementTimer]);

  return <div>Time: {seconds}</div>;
};
export default Timer;
