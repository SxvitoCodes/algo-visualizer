import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DrawArray from "./render/DrawArray";

function App() {
  const [array, setArray] = useState<number[]>([]);

  return (
    <>
      <Navbar />
      <DrawArray array={array} setArray={setArray} />
    </>
  );
}

export default App;
