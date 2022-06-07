import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";
import ProductsProvider from "./context/ProductsProvider";
import UserProvider from "./context/UserProvider";

axios.defaults.baseURL = "http://localhost:3001/";

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
