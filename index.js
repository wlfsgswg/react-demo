import React from "react";
import ReactDom from "react-dom";
import App from "./src/index.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./src/store/reducers/index.js";

let store = createStore(todoApp);

if (module.hot) {
  module.hot.accept("./src/index.jsx", () => {
    ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("app")
    );
  });
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
