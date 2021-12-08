import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { leftContext } from ".././../App";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

let box = styled.div`
  padding: 20px;
`;

const name = styled.h4`
  font-size: 25 px;
  color: ${(props) => props.color};
`;

const CSSTran = styled.div``;

class Detail2 extends React.Component {
  componentDidMount() {
    // Detail2 컴포넌트가 Mount(등장) 되었을 때 실행할 코드
  }

  componentWillUnmount() {
    // Detail2 컴포넌트가 UnMount(등장) 되기전에 실행할 코드
  }
}

const Detail = (props) => {
  const left = useContext(leftContext);

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

  const [tab, setTab] = useState(0);
  const [switchs, setSwitchs] = useState(false);

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
              props.dispatch({
                type: "항목추가",
                payload: { id: 2, name: "새로운상품", quan: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          &nbsp;
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
              setSwitchs(false);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
              setSwitchs(false);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTran></CSSTran>
      <CSSTransition in={switchs} classNames="wow" timeout={500}>
        <TabContent tab={tab} setSwitchs={setSwitchs} />
      </CSSTransition>
    </div>
  );
};

const TabContent = (props) => {
  useEffect(() => {
    props.setSwitchs(true);
  });
  if (props.tab === 0) {
    return <div>0번째 내용</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용</div>;
  } else if (props.tab === 2) {
    return <div>2번째 내용</div>;
  }
};

const func = (state) => {
  console.log(state);
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  };
};

export default connect(func)(Detail);

//export default Detail;
