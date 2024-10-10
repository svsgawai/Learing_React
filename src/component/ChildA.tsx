import React from "react";
import ChildB from "./ChildB";

const ChildA = (props: any) => {
  return (
    <div>
      <h3>This is Child A component</h3>
      <h1> We are displaying {props.data}</h1>
      <ChildB />
    </div>
  );
};

export default ChildA;
