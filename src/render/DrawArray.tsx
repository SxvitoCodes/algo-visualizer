import React from "react";
import linearSearch from "../algorithms/searching/LinearSearch";
import type { MarkColor } from "../App";
import { generateRandomNumberBetween } from "../helpers/Helpers";

interface DrawArrayProPs {
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>
  marks: Record<number, MarkColor>;
  setMarks: React.Dispatch<React.SetStateAction<Record<number, MarkColor>>>;
}

const DrawArray = ({array, setArray, marks, setMarks}: DrawArrayProPs) => {
  function generateNewRandomArray() {
    const arrayLength = 100;
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(generateRandomNumberBetween(0, 500));
    }
    setArray([...newArray]);
    setMarks({})
  }

  function runLinearSearch() {
    if (array.length === 0) return;
    setMarks({});
    linearSearch(array, array[99], setMarks, 10);
  }

  return (
    <>
      <button
        onClick={generateNewRandomArray}
        className="ml-4 text-white font-bold py-2 px-4 rounded"
      >
        Generate New Array!
      </button>
      <button
        onClick={runLinearSearch}
        className="ml-4 text-white font-bold py-2 px-4 rounded"
      >
        Linear Search!
      </button>
      <div className="mt-16 w-full h-full flex justify-center items-end gap-1">
        {array.map((item, i) => (
          <div 
          key={i} 
          className="array-bar w-2 bg-white" 
          style={{
            height: `${item}px`,
            backgroundColor: `${marks[i] ?? "white"}`
          }}></div>
        ))}
      </div>
    </>
  );
};

export default DrawArray;
