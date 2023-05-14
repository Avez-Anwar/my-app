import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchApiUseEffect from "./container/FetchApiUseEffect";
import InputUseEffect from "./container/InputUseEffect";
import List from "./container/List";
import ListArray from "./container/ListArray";

function App() {

  return <div className="App">
    <FetchApiUseEffect/>
    <InputUseEffect/>
    <hr />
    <List/>
    <hr />
    <ListArray/>
  </div>;
}

export default App;
