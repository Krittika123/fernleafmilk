import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
<BrowserRouter>
   <App/>
</BrowserRouter>
,document.getElementById("root"));
//ReactDOM.render(what to show,where to show,return type);
//JSX: JavaScript Extendable or JavaScript and XML