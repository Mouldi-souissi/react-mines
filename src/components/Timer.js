import React, { useEffect, useState, useContext } from "react";
import { BombContext } from "../context/BombContext";

const Timer = () => {
  let [seconds, setSeconds] = useState(1);
  const { win, loss } = useContext(BombContext);

  useEffect(() => {
    let interval = null;
    if (!loss) {
      if (!win) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      }
    } else if (loss && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [win, loss, seconds]);

  return <div>Time:{seconds}</div>;
};
export default Timer;
