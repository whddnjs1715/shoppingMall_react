import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// const store = createStore(() => {
//   return [
//     { id: 0, name: "멋진신발", quan: 2 },
//     { id: 1, name: "멋진옷", quan: 2 },
//   ];
// });

const alertBasic = true;

const reducer2 = (state = alertBasic, action) => {
  return state;
};

const basicState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진옷", quan: 2 },
  { id: 3, name: "퀀도1", quan: 2 },
];

const reducer = (state = basicState, action) => {
  if (action.type === "항목추가") {
    const copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "수량증가") {
    const copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "수량감소") {
    const copy = [...state];
    if (copy[0].quan > 0) {
      copy[0].quan--;
    }
    return copy;
  } else {
    return state;
  }
};

const store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
