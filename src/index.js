import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import DataTable from "./client/containers/course";
import Login from "./client/containers/login";
import reportWebVitals from "./client/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("calender")
);

ReactDOM.render(
  <React.StrictMode>
    <DataTable />
  </React.StrictMode>,
  document.getElementById("table")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
