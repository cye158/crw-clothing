import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./redux/store";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store} key="provider">
    <BrowserRouter>
      <App />
      <PersistGate persistor={persistor}></PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
