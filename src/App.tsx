import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./component/UseStateDemo";
import { RoutingDemo } from "./component/RoutingDemo";
import UseEffectDemo from "./component/UseEffectDemo";
import AddRemoveItem from "./component/AddRemoveItem";
import { AddEdit } from "./component/AddEdit";
import DynamicRadio from "./component/DynamicRadio";
import DropDownDemo from "./component/DropDownDemo";
import UpdateObject from "./component/UpdateObject";
import Parent from "./component/Parent";
import Parentcallback from "./component/usecallback &Memo/Parentcallback";
import DemouseRefHook from "./component/DemouseRefHook";
import { createContext } from "react";
import CompA from "./component/UseContextHook/CompA";
import CompC from "./component/UseContextHook/CompC";
import PaginationDemo from "./component/pagination/PaginationDemo";
import FileExp from "./component/FileExplorer/FileExp";
import FetchMethod from "./component/FetchAPI/FetchMethod";
import StopWatchPractice from "./component/StopWatch/StopWatchPractice";

export const data = createContext("");
export const data1 = createContext("");
function App() {
  const name = "Suraj Gawai";
  const designation = "Software Engineer";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoutingDemo />}></Route>
          <Route path="/usestatedemo" element={<UseStateDemo />}></Route>
          <Route path="/useeffectdemo" element={<UseEffectDemo />}></Route>
          <Route path="/addremoveitem" element={<AddRemoveItem />}></Route>
          <Route path="/addedit" element={<AddEdit />}></Route>
          <Route path="/radio" element={<DynamicRadio />}></Route>
          <Route path="/ddl" element={<DropDownDemo />}></Route>
          <Route path="/obj" element={<UpdateObject />}></Route>
          <Route path="/usecallback" element={<Parentcallback />}></Route>
          <Route path="/DemouseRefHook" element={<DemouseRefHook />}></Route>
          {/* <Route path="/useContextHook" element={<CompC />}></Route> */}
          <Route path="/pagination" element={<PaginationDemo />}></Route>
          <Route path="/fileexplorer" element={<FileExp />}></Route>
          <Route path="/fetchAPI" element={<FetchMethod />}></Route>
          <Route path="/stopwatch" element={<StopWatchPractice />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Parent />/ */}

      {/* <data.Provider value={name}>
        <data1.Provider value={designation}>
          <CompA />
        </data1.Provider>
      </data.Provider> */}
    </div>
  );
}

export default App;
