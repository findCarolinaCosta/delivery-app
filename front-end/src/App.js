import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import OrderClients from './pages/OrdersClients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/customer/orders" element={ <OrderClients /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
