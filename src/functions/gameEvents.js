const gameEvents = (grid, click, square, gridSize) => {
  // show clicked square
  const showSquare = (square) => {
    let x = square.x;
    let y = square.y;

    return grid.map((square) =>
      square.x === x && square.y === y ? { ...square, hidden: false } : square
    );
  };

  // squares arround
  const arround = (x, y) => {
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
        square.x >= 0 &&
        square.y >= 0 &&
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

  // open empty recursive
  const openEmpty = (square) => {
    let squares = arround(square.x, square.y);
    for (let i = 0; i < squares.length; i++) {
      grid = showSquare({ x: squares[i].x, y: squares[i].y });
      if (squares[i].inner === 0 && square.hidden === true) {
        openEmpty(squares[i]);
      }
    }
    return grid;
  };

  // put flag
  const flag = (square) => {
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
    grid = showSquare(square);
    if (square.inner === 0) {
      grid = openEmpty(square);
    }
  }
  // right click
  if (click === "right") {
    grid = flag(square);
  }
  // double click
  if (click === "double") {
    let squares = arround(square.x, square.y).filter((el) => el.hidden);
    let nbFlags = squares.filter((el) => el.flag).length;
    for (let i = 0; i < squares.length; i++) {
      if (nbFlags === square.inner && !squares[i].flag)
        grid = showSquare({ x: squares[i].x, y: squares[i].y });
    }
  }
  return grid;
};
export default gameEvents;
