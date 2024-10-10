import React, { useEffect, useRef } from "react";

const DemouseRefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h4>useRef Demo</h4>
      <p></p>
      <div>
        Email ID : <input type="text" ref={inputRef} />
        <br />
        <br />
        Password : <input type="password" />
      </div>
    </div>
  );
};

export default DemouseRefHook;
