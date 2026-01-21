export function getRandomArray (arraySize: number) {
  return Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * 100) + 1
  )
}
