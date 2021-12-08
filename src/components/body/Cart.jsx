import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const Cart = (props) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    증가
                  </button>
                  &nbsp;
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    감소
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className="my-alert2">
        <p>지금 구매하시면 신규할인 20%</p>
        <button
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            history.back();
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

// const func = (props) => {
//   return {
//     state : state[0].name,
//     state: props,
//   };
// };

const func = (state) => {
  console.log(state);
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  };
};

export default connect(func)(Cart);

//export default Cart;
