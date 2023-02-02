import { useState } from "react";
import Square from "./Square";

export const Board = () => {
  const [squares, setSquares] = useState<string[]>(
    [...Array(9)].map((_, i) => i.toString())
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const squares2 = squares.slice();
    squares2[i] = xIsNext ? "X" : "O";
    setSquares(squares2);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div className="status">Next player: {xIsNext ? "X" : "O"}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
