import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UseEffectDemo = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("suraj Gawai");
  }, [counter]);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h2>Counter is {counter}</h2>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};
export default UseEffectDemo;
