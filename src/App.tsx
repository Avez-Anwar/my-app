import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchApiUseEffect from "./container/FetchApiUseEffect";
import InputUseEffect from "./container/InputUseEffect";

function App() {

  return <div className="App">
    <FetchApiUseEffect/>
    <InputUseEffect/>
  </div>;
}

export default App;
