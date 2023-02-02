import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../herlpers/calculateWinner";
export const Board = () => {
  const [squares, setSquares] = useState<string[]>(
    [...Array(9)].map((_, i) => i.toString())
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handlerClick = (i: number) => {
    const squares2 = squares.slice();
    squares2[i] = xIsNext ? "X" : "O";
    setSquares(squares2);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handlerClick(0)} />
        <Square value={squares[1]} onClick={() => handlerClick(1)} />
        <Square value={squares[2]} onClick={() => handlerClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handlerClick(3)} />
        <Square value={squares[4]} onClick={() => handlerClick(4)} />
        <Square value={squares[5]} onClick={() => handlerClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handlerClick(6)} />
        <Square value={squares[7]} onClick={() => handlerClick(7)} />
        <Square value={squares[8]} onClick={() => handlerClick(8)} />
      </div>
    </div>
  );
};

export default Board;
