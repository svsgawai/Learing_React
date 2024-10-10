import React, { useEffect, useState } from "react";

interface myData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const FetchMethod = () => {
  const [data, setData] = useState<myData[]>([]);

  const getAllData = async () => {
    const apiData = await fetch("https://fakestoreapi.com/products")
      .then((res) => {
        res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(apiData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <h1>Data from API Here</h1>

      <table className="table stripped">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>ID</th>
            <th>Title</th>
            <th>Disc</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele: myData, index: number) => {
            return (
              <>
                <tr>
                  <td>{ele.id}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchMethod;
