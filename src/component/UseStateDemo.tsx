import React, { useState } from "react";
import { Link } from "react-router-dom";

export const UseStateDemo = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const ChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Link to={"/"}>Home</Link>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value={message}
              name="name"
              placeholder="Enter Name"
              onChange={(e) => ChangeData(e)}
            ></input>
            <h2>Hello, {message}</h2>
            <br />
            <span>{count}</span>
            <br />
            <button onClick={Increment}>Inc +</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseStateDemo;
