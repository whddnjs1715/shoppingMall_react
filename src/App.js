import React, { useState } from "react";
import "./App.css";
import Data from "./utils/data.js";
import Navb from "./components/head/Nav";
import Jumbotro from "./components/body/Jumbotro";

function App() {
  const [shoes, setShoes] = useState(Data);
  const ShoesList = () => {
    return shoes.map((a, i) => {
      return (
        <div className="col-md-4">
          <img src={shoes[i].src} alt={shoes[i].alt} width="100%" />
          <h4>{shoes[i].title}</h4>
          <p>{shoes[i].content}</p>
          <p>{shoes[i].price}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Navb />
      <Jumbotro />

      <div className="container">
        <div className="row">
          <ShoesList />
        </div>
      </div>
    </div>
  );
}

export default App;
