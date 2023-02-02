import Square from "./Square";

export const Board = () => {
  // デフォで rederSquare 刺さっているけどまぁいっかの気持ち
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
