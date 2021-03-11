const gameEvents = (grid, click, square, gridSize, totalBombs) => {
  // vars
  let loss = false;
  let win = false;

  // show clicked square
  const showSquare = (square) => {
    let x = square.x;
    let y = square.y;

    // check loss
    if (square.inner === "bomb") {
      loss = true;
    }
    return grid.map((square) =>
      square.x === x && square.y === y ? { ...square, hidden: false } : square
    );
  };

  // show adjacent squares
  const showAdjacentSquares = (x, y) => {
    let realSquares = [];
    let squares = [
      { x: x + 1, y },
      { x: x - 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 },
      { x: x + 1, y: y + 1 },
      { x: x - 1, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y + 1 },
    ].filter(
      (square) =>
        // negative limit
        square.x >= 0 &&
        square.y >= 0 &&
        // positive limit
        square.x < gridSize &&
        square.y < gridSize
    );
    for (let i = 0; i < squares.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (squares[i].x === grid[j].x && squares[i].y === grid[j].y) {
          realSquares.push(grid[j]);
        }
      }
    }
    return realSquares;
  };

  // show empty squares
  const showEmptySquares = (square) => {
    grid = showSquare(square);

    let squares = showAdjacentSquares(square.x, square.y);
    for (let i = 0; i < squares.length; i++) {
      grid = showSquare({
        x: squares[i].x,
        y: squares[i].y,
        inner: squares[i].inner,
      });
      if (
        squares[i].inner === 0 &&
        square.hidden === true
        // squares.filter((el) => !el.hidden).length === squares.length
      ) {
        showEmptySquares(squares[i]);
      }
    }

    return grid;
  };

  // put a flag on a square
  const putFlag = (square) => {
    let x = square.x;
    let y = square.y;
    return grid.map((square) =>
      square.x === x && square.y === y
        ? { ...square, flag: !square.flag }
        : square
    );
  };

  //left click
  if (click === "left") {
    if (square.inner !== 0) {
      grid = showSquare(square);
    } else {
      grid = showEmptySquares(square);
    }
  }

  // right click
  if (click === "right") {
    grid = putFlag(square);
  }

  // double click
  if (click === "double") {
    let squares = showAdjacentSquares(square.x, square.y).filter(
      (el) => el.hidden
    );
    let nbFlags = squares.filter((el) => el.flag).length;
    for (let i = 0; i < squares.length; i++) {
      if (nbFlags === square.inner && !squares[i].flag)
        grid = showSquare({
          x: squares[i].x,
          y: squares[i].y,
          inner: squares[i].inner,
        });
    }
  }

  // check win
  if (
    grid.filter((square) => square.hidden === false).length ===
      Math.pow(gridSize, 2) - totalBombs &&
    !loss
  ) {
    win = true;
  }

  // put flags on remaining squares after win
  if (win) {
    grid = grid.map((square) =>
      !square.flag ? { ...square, flag: true } : square
    );
  }

  return { grid, loss, win };
};
export default gameEvents;
