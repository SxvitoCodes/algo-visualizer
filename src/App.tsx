import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DrawArray from "./render/DrawArray";

export type MarkColor = "white" | "red" | "green";

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [marks, setMarks] = useState<Record<number, MarkColor>>([]);

  return (
    <>
      <Navbar />
      <DrawArray
        array={array}
        setArray={setArray}
        marks={marks}
        setMarks={setMarks}
      />
    </>
  );
}

export default App;
