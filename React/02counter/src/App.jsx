import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  // let counter = 15;
  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // };

  return (
    <>
      <h1>React Course webdev with Hitesh Choudry {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>remove Value</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
