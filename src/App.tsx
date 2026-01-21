import { useReducer, type FormEvent } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { getRandomArray } from "./lib/math/getRandomArray";

type Action = { type: "SET_RANDOM_ARRAY" };

type State = {
  randomArray: number[];
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_RANDOM_ARRAY":
      return { ...state, randomArray: getRandomArray(100) };
    default:
      return state;
  }
}
function handleSubmit(e: FormEvent) {
  e.preventDefault();
}

function App() {
  const [{ randomArray }, dispatch] = useReducer(reducer, {
    randomArray: [],
  });
  return (
    <div className="h-screen flex flex-col">
      <header className="container pt-4 flex-col flex items-center gap-8 pb-4 lg:gap-24 lg:pb-8 lg:flex-row">
        <h1 className="font-bold text-2xl grow">Algo Visualizer</h1>
        <form
          className="grid gap-4 items-end grid-cols-2 md:grid-cols-4 md:gap-8"
          onSubmit={handleSubmit}
        >
          <Button
            onClick={() => dispatch({ type: "SET_RANDOM_ARRAY" })}
            type="button"
            variant="outline"
          >
            Randomize
          </Button>
        </form>
      </header>
      <main className="flex flex-row items-end w-full grow  overflow-hidden">
        {randomArray.map((value, index) => (
          <div
            key={index}
            className="grow flex items-end justify-center pb-2 bg-red-600"
            style={{ height: `${value}%` }}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
