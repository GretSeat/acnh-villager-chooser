import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [acData, setAcData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      fetch("")
        .then((res) => res.json())
        .then((data) => setAcData(data));
      console.log("Data Loaded");
    },
    [count]
  );

  return (
    <>
      <pre>{JSON.stringify(acData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </>
  );
}

export default App;
