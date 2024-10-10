import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const AddRemoveItem: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [element, setElement] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addElement = () => {
    if (inputValue.trim() !== "") {
      setElement([...element, inputValue]);
      setInputValue("");
    }
  };

  const deleteItem = (index: number) => {
    const updateList = [...element];
    updateList.splice(index, 1);
    setElement(updateList);
  };
  const searchItem = element.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <div className="container">
        <div className=" form-group row mt-4">
          <label htmlFor="listItem" className="col-sm-2">
            Enter List Item
          </label>
          <div className="col-sm-3">
            <input
              className="form-control"
              type="text"
              value={inputValue}
              onChange={changeInput}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="submit"
              onClick={addElement}
              className="btn btn-outline-success"
            >
              Add Item
            </button>
          </div>
          <div className=" form-group row mt-4">
            <label htmlFor="listItem" className="col-sm-2">
              Search Item Here
            </label>
            <div className="col-sm-3">
              <input
                className="form-control"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ol>
              {element &&
                searchItem.map((ele, index) => (
                  <li key={index}>
                    {ele}
                    <button
                      type="button"
                      onClick={() => deleteItem(index)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRemoveItem;
