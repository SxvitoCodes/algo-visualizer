import type React from "react";
import type { MarkColor } from "../../App";

function linearSearch(
  array: number[],
  target: number,
  setMarks: React.Dispatch<React.SetStateAction<Record<number, MarkColor>>>,
  delayMs = 10
) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
    const color: MarkColor = array[i] === target ? "green" : "red";

      setMarks((prev) => ({ ...prev, [i]: color }));
    }, i*delayMs);

    if (array[i] === target) return;
  }
}

export default linearSearch;
