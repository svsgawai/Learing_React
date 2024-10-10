import React from "react";
import ChildA from "./ChildA";

const ChildB = (props: any) => {
  return (
    <div>
      <h2>Child B Component</h2>

      <h3>{props.data}</h3>
    </div>
  );
};

export default ChildB;
