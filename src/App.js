import React from "react";
import logo from "./image/me.png";
import "./css/App.css";
import Home from "./Component/Home";
import Background from "./Component/Background";
import SidebarContainer from "./Component/SidebarContainer";

function App() {
  return (
    <div className="App">
      <Background></Background>
      <SidebarContainer></SidebarContainer>
      <Home></Home>
    </div>
  );
}

export default App;
