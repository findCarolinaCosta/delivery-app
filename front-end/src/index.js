import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import App from "./App";
import MainProvider from "./context/MainProvider";

axios.defaults.baseURL = 'http://localhost:3001/';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
