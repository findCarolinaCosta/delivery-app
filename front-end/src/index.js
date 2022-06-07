import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsProvider from "./context/ProductsProvider";
import UserProvider from "./context/UserProvider";

axios.defaults.baseURL = "http://localhost:3030/";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
