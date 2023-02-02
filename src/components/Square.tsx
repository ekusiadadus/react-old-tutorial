// ここのonClick の型は、() => void となっています
// setSquares を渡すと、Dispatch 型になってしまうので注意
const Square = ({ value, onClick }: { value: string; onClick: () => void }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
