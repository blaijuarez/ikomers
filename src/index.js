import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StaticContext } from "./context/StaticContext";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import carritoReducer from "./reducers/carrito";

const store = createStore(carritoReducer);

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
