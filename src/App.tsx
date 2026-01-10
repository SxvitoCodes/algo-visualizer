import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DrawArray from "./render/DrawArray";

export type MarkColor = "white" | "red" | "green";

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [marks, setMarks] = useState<Record<number, MarkColor>>([]);
  const [speed, setSpeed] = useState<number>(10);

  return (
    <>
      <Navbar />
      <DrawArray
        array={array}
        setArray={setArray}
        marks={marks}
        setMarks={setMarks}
        speed={speed}
        setSpeed={setSpeed}
      />
    </>
  );
}

export default App;
