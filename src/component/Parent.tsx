import React from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const data = "Parent Component Data";
  return (
    <div>
      <h3>This is Parent Component </h3>
      <ChildA data={data} />
    </div>
  );
};

export default Parent;
