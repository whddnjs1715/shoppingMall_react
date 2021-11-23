import React, { useState } from "react";
import "./App.css";
import Navb from "./components/head/Nav";
import Jumbotro from "./components/body/Jumbotro";
import ShoesListt from "./components/body/ShoesListt";
import Detail from "./components/body/Detail";
import Data from "./utils/data";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

function App() {
  // 중요한 데이터들은 상위 컴포넌트에 보관하는 것이 좋다 -> 모든 데이터는 위에서 밑으로 흐르기 때문에
  const [shoes, setShoes] = useState(Data);
  const [left, setLeft] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navb />
      <Switch>
        <Route exact path="/">
          <Jumbotro />
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  // then() : ajax 요청이 성공했을때 실행되는 코드
                  .then((result) => {
                    console.log(result.data);
                    console.log(result.data[0].content);
                    console.log(result.data[0].title);
                    setShoes([...shoes, ...result.data]);
                  })
                  // catch() : ajax 요청이 실패했을때 실행되는 코드
                  .catch(() => {
                    {
                      console.log("Fail!!!!!");
                    }
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} left={left} setLeft={setLeft} />
        </Route>
        <Route path="/:id">
          <div>everything 아무거나 다보여짐</div>
        </Route>
      </Switch>
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
