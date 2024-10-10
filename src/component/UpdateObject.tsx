import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateObject = () => {
  const [obj, setObj] = useState({
    firstName: "Suraj",
    lastName: "Gawai",
    address: { firstline: "Chikhli", secondLine: "Buldhana" },
  });

  const changeAddress = () => {
    setObj({ ...obj, address: { ...obj.address, secondLine: "Pune" } });
    // setObj({ ...obj, lastName: "Pawar" });
  };

  return (
    <>
      <Link to={"/"}>Home</Link>
      <h4>How to change the value of nested objects</h4>
      <h5>{obj.firstName}</h5>
      <h5>{obj.lastName}</h5>
      <h5>{obj.address.firstline}</h5>
      <h5>{obj.address.secondLine}</h5>
      <button onClick={changeAddress}>Click to Change </button>
    </>
  );
};

export default UpdateObject;
