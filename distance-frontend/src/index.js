import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker.js";
import "./index.css";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
