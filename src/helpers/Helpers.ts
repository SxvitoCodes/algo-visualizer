// got idea from: https://stackoverflow.com/questions/45175836/random-number-using-react-js
export function generateRandomNumberBetween(range1: number, range2: number): number {
  return Math.floor(range1 + Math.random() * (range2 - range1)) + 1;
}