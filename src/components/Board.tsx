import { useState } from "react";
import Square from "./Square";

export const Board = () => {
  // 本家はここで null が入っていますがstringだけの型にしたいので、0-8 までの数字を入れています。
  const [squares, setSquares] = useState<string[]>(
    [...Array(9)].map((_, i) => i.toString())
  );

  // ここで、setSquares を関数の中で呼び出すようにしている
  // setSquares を直接子コンポーネントに渡すとき、TypeScript だと Dispatch 型みたいなので渡すことになる
  const handleClick = (i: number) => {
    const squares2 = squares.slice();
    squares2[i] = "X";
    setSquares(squares2);
  };

  return (
    <div>
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
