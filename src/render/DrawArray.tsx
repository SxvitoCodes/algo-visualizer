import React from "react";
import linearSearch from "../algorithms/searching/LinearSearch";

interface DrawArrayProPs {
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>
}

// got idea from: https://stackoverflow.com/questions/45175836/random-number-using-react-js
function generateRandomNumberBetween(range1: number, range2: number): number {
  return Math.floor(range1 + Math.random() * (range2 - range1)) + 1;
}

const DrawArray = ({array, setArray}: DrawArrayProPs) => {
  function generateNewRandomArray() {
    const arrayLength = 100;
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(generateRandomNumberBetween(0, 500));
    }
    setArray([...newArray]);
  }

  return (
    <>
      <button
        onClick={() => generateNewRandomArray()}
        className="ml-4 text-white font-bold py-2 px-4 rounded"
      >
        Generate New Array!
      </button>
      <button
        onClick={() => linearSearch(array, array[99])}
        className="ml-4 text-white font-bold py-2 px-4 rounded"
      >
        Linear Search!
      </button>
      <div className="mt-16 w-full h-full flex justify-center items-end gap-1">
        {array.map((item, i) => (
          <div key={i} className={`array-bar w-2 bg-white`} style={{height: `${item}px`}}></div>
        ))}
      </div>
    </>
  );
};

export default DrawArray;
