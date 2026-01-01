import { useState } from "react";

// got idea from: https://stackoverflow.com/questions/45175836/random-number-using-react-js
function generateRandomNumberBetween(range1: number, range2: number): number {
  return Math.floor(range1 + Math.random() * (range2 - range1)) + 1;
}

const DrawArray = () => {
  const [array, setArray] = useState<number[]>([]);

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
        onClick={generateNewRandomArray}
        className="ml-4 text-white font-bold py-2 px-4 rounded"
      >
        Generate New Array!
      </button>
      <div className="mt-16 w-full h-full flex justify-center items-end gap-1">
        {array.map((item, i) => (
          <div key={i} className={`w-2 bg-white`} style={{height: `${item}px`}}></div>
        ))}
      </div>
    </>
  );
};

export default DrawArray;
