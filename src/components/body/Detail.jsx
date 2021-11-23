import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let box = styled.div`
  padding: 20px;
`;

const name = styled.h4`
  font-size: 25 px;
  color: ${(props) => props.color};
`;

class Detail2 extends React.Component {
  componentDidMount() {
    // Detail2 컴포넌트가 Mount(등장) 되었을 때 실행할 코드
  }

  componentWillUnmount() {
    // Detail2 컴포넌트가 UnMount(등장) 되기전에 실행할 코드
  }
}

const Detail = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log("안녕");
    //return function 어쩌구(){실행할 코드(사라질때 실행됨)}
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const Info = () => {
    return <p>재고 : {props.left[0]}</p>;
  };

  const [alert, setAlert] = useState(true);
  const [inputData, setInput] = useState("");

  const history = useHistory();
  const { id } = useParams();
  const findId = props.shoes.find(function (shoesId) {
    return shoesId.id == id;
  });
  return (
    <div className="container">
      <box>
        <name color={"red"}>Detail</name>
      </box>
      <hr />
      {inputData}
      {/* <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      /> */}
      {alert === true ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (Number(id) + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>

          <Info left={props.left} />

          <button
            className="btn btn-danger"
            onClick={() => {
              /**재고에서 1 감소시키기**/
              props.setLeft([1, 2, 3]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              //history.goBack();
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
