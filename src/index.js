import React from "react";
import CardList from "./CardList";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tachyons";
import { robots } from "./robot";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals