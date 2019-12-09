import React from "react";
import ReactDom from "react-dom";
import App from "./src/index.jsx";
import _ from "lodash";
import { add } from "./src/util/index.js";
if (module.hot) {
  module.hot.accept("./src/index.jsx", () => {
    ReactDom.render(<App />, document.getElementById("app"));
  });
}

ReactDom.render(<App />, document.getElementById("app"));
