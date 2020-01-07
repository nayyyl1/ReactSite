import React from "react";
import logo from "./image/me.png";
import "./css/App.css";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;
