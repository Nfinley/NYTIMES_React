'use strict';
// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Include the Main Component
// import Main from "./components/Main";
// import routes from "./config/routes";
const routes = require("./config/routes");
// This code here allows us to render our main component (in this case "Main")
// ReactDOM.render(<Main />, document.getElementById("app"));
ReactDOM.render(routes, document.getElementById("app"));
