import React, { useState } from "react";
import "./App.css";
import Navb from "./components/head/Nav";
import Jumbotro from "./components/body/Jumbotro";
import ShoesListt from "./components/body/ShoesListt";

function App() {
  return (
    <div className="App">
      <Navb />
      <Jumbotro />
      <ShoesListt />
    </div>
  );
}

export default App;
