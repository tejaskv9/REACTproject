import React, { useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>,
  root
);