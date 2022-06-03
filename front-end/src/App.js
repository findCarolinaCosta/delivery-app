import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import OrderClients from './pages/OrdersClients';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders" element={ <OrderClients /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
