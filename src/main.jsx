import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DataLayer } from "./Auth/DataLayer";
import reducer, { initialState } from "./Auth/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataLayer reducer={reducer} initialState={initialState}>
    <App />
  </DataLayer>
);
