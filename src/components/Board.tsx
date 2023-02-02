import Square from "./Square";

export const Board = () => {
  // デフォで rederSquare 刺さっているけどまぁいっかの気持ち <- いらないと判断したので消します。
  // 原理主義者なら、ここで renderSquare を定義して、Board の中で使うというのもありかもしれません。
  return (
    <div>
      <div className="board-row">
        <Square value={"0"} />
        <Square value={"1"} />
        <Square value={"2"} />
      </div>
      <div className="board-row">
        <Square value={"3"} />
        <Square value={"4"} />
        <Square value={"5"} />
      </div>
      <div className="board-row">
        <Square value={"6"} />
        <Square value={"7"} />
        <Square value={"8"} />
      </div>
    </div>
  );
};
export default Board;
