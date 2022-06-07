import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CustomerOrder from './pages/CustomerOrder';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrder from './pages/SellerOrder';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders" element={ <CustomerOrder /> } />
        <Route exact path="/seller/orders" element={ <SellerOrder /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
