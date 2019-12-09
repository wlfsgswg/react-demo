import React from "react";
import ReactDom from "react-dom";
import App from "./src/index.jsx";
import _ from "lodash";
if (module.hot) {
  module.hot.accept("./src/index.jsx", () => {
    ReactDom.render(<App />, document.getElementById("app"));
  });
}

ReactDom.render(<App />, document.getElementById("app"));
