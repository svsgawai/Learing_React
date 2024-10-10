import React from "react";
import { Link } from "react-router-dom";

export const RoutingDemo = () => {
  return (
    <div>
      <h1>Here you can Route Your Component</h1>
      <Link to={"/UseEffectDemo"}>UseEffectDemo</Link>
      <br />
      <Link to={"/UseStateDemo"}>UseStateDemo</Link>
      <br />
      <Link to={"/addremoveitem"}>Add-Remove Item Demo</Link>
      <br />
      <Link to={"/addedit"}>Add-Edit Item Demo</Link>
      <br />
      <Link to={"/radio"}>Dynamic Radio Button Demo</Link>
      <br />
      <Link to={"/ddl"}>Dropdown List Demo</Link>
      <br />
      <Link to={"/obj"}>Update Object</Link>
      <br />
      <Link to={"/usecallback"}>Usecallback Demo</Link>
      <br />
      <Link to={"/DemouseRefHook"}>useRef Hook Demo</Link>
      <br />
      <Link to={"/useContextHook"}>useContext Hook Demo</Link>
      <br />
      <Link to={"/pagination"}>Pagination Demo</Link>

      <br />
      <Link to={"/fetchAPI"}>Fetch API</Link>
      <br />
      <Link to={"/stopwatch"}>Stop Watch</Link>
    </div>
  );
};
