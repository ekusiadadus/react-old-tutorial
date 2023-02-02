export const Square = ({ value }: { value: string }) => {
  return (
    <button
      className="square"
      onClick={() => {
        alert("click");
      }}
    >
      {value}
    </button>
  );
};

export default Square;
