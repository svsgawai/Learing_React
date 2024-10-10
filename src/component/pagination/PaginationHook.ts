import { useState } from "react";

const usePagination = (dataLength: any, records: any) => {
  const [page, setPage] = useState(1);

  const initialIndex = (page - 1) * records;
  const lastIndex = page * records;
  const numberOfPages = dataLength / records;
  const previousPage = () => (page > 1 ? setPage(page - 1) : setPage(1));
  const nextPage = () =>
    page < numberOfPages ? setPage(page + 1) : setPage(numberOfPages);

  return {
    initialIndex,
    lastIndex,
    numberOfPages,
    setPage,
    previousPage,
    nextPage,
  };
};
export default usePagination;
