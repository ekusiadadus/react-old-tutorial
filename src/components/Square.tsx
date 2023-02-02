import { useState } from "react";

export const Square = ({ value }: { value: string }) => {
  // ここでは、本家コードだと state, setState になっています
  // 予約語の state と setState は使えないので、value2, setValue2 にしています
  const [value2, setValue2] = useState<string>(value);

  return (
    <button
      className="square"
      onClick={() => {
        setValue2("X");
      }}
    >
      {value2}
    </button>
  );
};
export default Square;
