import React, { useContext } from "react";
import { data, data1 } from "../../App";
const CompC = () => {
  const name = useContext(data);
  const des = useContext(data1);

  return (
    <div>
      <h1>
        My Name is {name} and my Desgination is {des}
      </h1>
    </div>
  );
};

export default CompC;
