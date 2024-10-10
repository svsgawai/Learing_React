import React, { memo } from "react";

const Child = (counterTwo: any, setCounterTwo: any) => {
  console.log("child Component Rendered...");
  return (
    <div>
      <h1>Child Component...</h1>
    </div>
  );
};

export default memo(Child);
