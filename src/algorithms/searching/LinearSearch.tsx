import Mark from "../../helpers/Mark";

function linearSearch(array: number[], target: number) {
  const elements = document.getElementsByClassName("array-bar") as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      setTimeout(() => {
        Mark(elements[i], 'green');
      }, i*10);
      return;
    } else {
      setTimeout(() => {
        Mark(elements[i], 'red');
      }, i*10);
    }
  }
}

export default linearSearch;
