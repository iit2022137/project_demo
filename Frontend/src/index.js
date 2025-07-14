import React from "react";
import ReactDOM from "react-dom"; // ✅ Use this in React 17
import "./index.css";
import App from "./App";

import { legacy_createStore as createStore } from "redux";
import allReducers from "./Reducers/index.js";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ✅ React 17 uses ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
