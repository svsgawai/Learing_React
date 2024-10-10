import React, { useState } from "react";
import { Link } from "react-router-dom";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

function DropDownDemo() {
  const [country, setCountry] = useState<any>({
    name: "",
    value: "",
    cities: [],
  });
  return (
    <>
      <Link to={"/"}>Home</Link>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-3">
            <select
              className="form-select"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="Select">---Select Country---</option>
              {countries.map((item, index) => {
                return (
                  <>
                    <option value={index}>{item.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="col-sm-3">
            <select className="form-select" value={country}>
              {countries[country] &&
                countries[country].cities.map((item, index) => {
                  return <option value={index}>{item}</option>;
                })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDownDemo;
