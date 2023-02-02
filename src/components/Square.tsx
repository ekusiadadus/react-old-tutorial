// ここの value は string か number かという議論はあります。
export const Square = ({ value }: { value: string }) => {
  return <button className="square">{value}</button>;
};
export default Square;
