import { useState } from "react";
import { calculateWinner } from "../herlpers/calculateWinner";
import Board from "./Board";

export const Game = () => {
  const [history, setHistory] = useState<{ squares: string[] }[]>([
    { squares: [...Array(9)].map((_, i) => i.toString()) },
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);

  const handleClick = (i: number) => {
    const history2 = history.slice(0, stepNumber + 1);
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
    setStepNumber(history2.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;
  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
export default Game;
