import React, { useCallback, useState } from "react";
import Child from "./Child";
import { Link } from "react-router-dom";

const Parentcallback = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);
  const increament = () => {
    setCounterOne(counterOne + 1);
  };
  const fun = useCallback(() => {
    console.log("Hello Suraj");
  }, counterTwo);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1>Parent of call back :</h1>
      <Child counterTwo={counterTwo} fun={fun} />
      <button onClick={increament}>Increament {counterOne}</button>
    </div>
  );
};

export default Parentcallback;
