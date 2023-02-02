import { useState } from "react";
import { calculateWinner } from "../herlpers/calculateWinner";
import Board from "./Board";

export const Game = () => {
  const [history, setHistory] = useState<{ squares: string[] }[]>([
    { squares: [...Array(9)].map((_, i) => i.toString()) },
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const history2 = history.slice(0, history.length);
    const current = history2[history2.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) === "X" || calculateWinner(squares) === "O") {
      return;
    }
    if (squares[i] === "X" || squares[i] === "O") {
      alert("This square is already taken");
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(history2.concat([{ squares: squares }]));
    setXIsNext(!xIsNext);
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
