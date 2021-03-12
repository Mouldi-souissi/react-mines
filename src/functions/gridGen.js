const gridGen = (gridSize, totalBombs) => {
  // var
  var grid = [];
  var bombs = [];

  // random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  // bomb generator
  const bombGen = () => {
    for (let i = 0; i < totalBombs; i++) {
      let x = getRandomIntInclusive(0, gridSize - 1);
      let y = getRandomIntInclusive(0, gridSize - 1);
      let duplicate = bombs.find((bomb) => bomb.x === x && bomb.y === y)
        ? true
        : false;
      if (!duplicate) {
        bombs = [...bombs, { x, y }];
      } else {
        i--;
      }
    }
    return bombs;
  };

  // squares around
  const squaresAround = (x, y) => {
    let squares = [
      { x: x + 1, y },
      { x: x - 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 },
      { x: x + 1, y: y + 1 },
      { x: x - 1, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y + 1 },
    ];
    return squares.filter(
      (square) =>
        square.x >= 0 &&
        square.y >= 0 &&
        square.x < gridSize &&
        square.y < gridSize
    );
  };

  // pushing bombs into grid
  const addBombs = () => {
    let bombs = bombGen();
    bombs.map((bomb) =>
      grid.push({
        x: bomb.x,
        y: bomb.y,
        inner: "bomb",
        hidden: true,
        flag: false,
      })
    );
    return grid;
  };
  addBombs();

  // numbers generator
  const numbersGen = (square) => {
    let x = square.x;
    let y = square.y;
    let squaresArround = squaresAround(x, y);
    let bombs = grid.filter((square) => square.inner === "bomb");
    let bombCounter = 0;

    for (let i = 0; i <= squaresArround.length; i++) {
      for (let j = 0; j <= bombs.length; j++) {
        if (squaresArround[i] && bombs[j]) {
          if (
            squaresArround[i].x === bombs[j].x &&
            squaresArround[i].y === bombs[j].y
          ) {
            bombCounter++;
          }
        }
      }
    }

    return bombCounter;
  };

  // final grid
  const finalGrid = () => {
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        if (!grid.find((el) => el.x === x && el.y === y)) {
          grid.push({
            x,
            y,
            inner: numbersGen({ x, y }),
            hidden: true,
            flag: false,
          });
        }
      }
    }
    return grid.sort((a, b) => a.x - b.x).sort((a, b) => a.y - b.y);
  };
  return finalGrid();
};
export default gridGen;
