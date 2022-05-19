import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StaticContext } from "./context/StaticContext";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { productos, carrito } from "./reducers";

const reducers = combineReducers({
  productos,
  carrito,
});
const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StaticContext>
          <App />
        </StaticContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
