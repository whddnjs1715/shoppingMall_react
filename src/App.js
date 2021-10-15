import React, { useState } from "react";
import "./App.css";
import Navb from "./components/head/Nav";
import Jumbotro from "./components/body/Jumbotro";
import ShoesListt from "./components/body/ShoesListt";
import Data from "./utils/data";

function App() {
  const [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <Navb />
      <Jumbotro />
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        alt={"shoes" + props.i}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default App;
