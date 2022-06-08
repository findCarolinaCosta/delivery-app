import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import CheckoutClient from './pages/CheckoutClient';
import CustomerOrder from './pages/CustomerOrder';
import CustomerOrderDetail from './pages/CustomerOrderDetail';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Register from './pages/Register';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/customer/checkout" element={ <CheckoutClient /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders" element={ <CustomerOrder /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
        <Route path="*" element={ <NotFound /> } />
        <Route
          exact
          path="/customer/orders/:saleId"
          element={ <CustomerOrderDetail /> }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
