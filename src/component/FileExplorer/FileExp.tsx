import React, { useState } from "react";
import FolderData from "./FolderData";

const FileExp: React.FC = () => {
  const [data, setdata] = useState(FolderData);

  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
};

export default FileExp;
