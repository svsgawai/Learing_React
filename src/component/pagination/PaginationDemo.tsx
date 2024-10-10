import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePagination from "./PaginationHook";

export interface dummyDataObj {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
}

const PaginationDemo = () => {
  const [apiData, setApiData] = useState<dummyDataObj[]>([]);
  const [records, setRecords] = useState({
    records: 10,
  });

  const {
    initialIndex,
    lastIndex,
    numberOfPages,
    setPage,
    previousPage,
    nextPage,
  } = usePagination(apiData.length, records.records);

  const getData = async () => {
    const data: any = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch((err) => err);
    console.log(data);
    setApiData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Link to={"/"}>Home</Link>

      <table className="table table-striped table-hover">
        <thead>
          <tr className=" table-dark">
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Imange</th>
          </tr>
        </thead>
        <tbody>
          {apiData
            .slice(initialIndex, lastIndex)
            .map((ele: dummyDataObj, index: number) => {
              return (
                <>
                  <tr>
                    <td>{ele.brand}</td>
                    <td>{ele.price}</td>
                    <td>
                      <img src={ele.thumbnail} alt="" width={50} height={50} />
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      <div>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            previousPage();
          }}
        >
          ◀{" "}
        </span>
        {[...Array(numberOfPages)].map((element, index: number) => {
          return (
            <>
              <span
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => {
                  setPage(index + 1);
                }}
              >
                {index + 1}
              </span>
            </>
          );
        })}
        <span
          onClick={() => {
            nextPage();
          }}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default PaginationDemo;
