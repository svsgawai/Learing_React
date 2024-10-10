import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddEdit: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [elementList, setElementList] = useState<string[]>([]);
  const [editElement, setEditElement] = useState<number | null>(null);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addElement = () => {
    if (inputValue.trim() !== "") {
      if (editElement !== null) {
        const updateList = [...elementList];
        updateList[editElement] = inputValue;
        setElementList(updateList);
        setEditElement(null);
      } else {
        setElementList([...elementList, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleEditElement = (index: number) => {
    setInputValue(elementList[index]);
    setEditElement(index);
  };

  return (
    <>
      <Link to={"/"}>Home</Link>
      <div className="container">
        <div className="form-group row mt-4">
          <label htmlFor="" className="col-sm-2">
            Enter Name
          </label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type="text"
              name="name"
              value={inputValue}
              onChange={(e) => {
                changeInput(e);
              }}
            />
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-outline-success"
              onClick={(e) => {
                addElement();
              }}
            >
              Add Element
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-3">
            <ol>
              {elementList.map((element, index) => (
                <li key="index">
                  {element}
                  <div
                    className="btn btn-outline-success col-sm-3"
                    onClick={() => {
                      handleEditElement(index);
                    }}
                  >
                    Edit
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
