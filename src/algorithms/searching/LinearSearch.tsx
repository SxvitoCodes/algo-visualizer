import type React from "react";
import type { MarkColor } from "../../App";

function linearSearch(
  array: number[],
  target: number,
  setMarks: React.Dispatch<React.SetStateAction<Record<number, MarkColor>>>,
  delayMs = 10
) {
  for (let i = 0; i < array.length; i++) {
    const color: MarkColor = array[i] === target ? "green" : "red";

    setTimeout(() => {
      setMarks((prev) => ({ ...prev, [i]: color }));
    }, delayMs);

    if (array[i] === target) return;
  }
}

export default linearSearch;
