import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import OrderProvider from "./context/OrderProvider";
import ProductsProvider from "./context/ProductsProvider";
import UserProvider from "./context/UserProvider";

axios.defaults.baseURL = "http://localhost:3001/";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
