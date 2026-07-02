import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const cartItems = useSelector(state => state.cart.items);
  
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>TRPL <span>Store</span></h1>
          <nav className="nav-links">
            <Link to="/">Products</Link>
            <Link to="/cart" className="cart-link">
              Cart
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </Link>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;