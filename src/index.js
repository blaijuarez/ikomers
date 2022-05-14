import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StaticContext } from "./context/StaticContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StaticContext>
        <App />
      </StaticContext>
    </BrowserRouter>
  </React.StrictMode>
);
