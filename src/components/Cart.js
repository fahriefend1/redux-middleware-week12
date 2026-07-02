import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/productActions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2 className="cart-empty-text">Your cart is empty</h2>
          <p className="cart-empty-sub">Start shopping to add items!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-info">
            <h4 className="cart-item-title">{item.title}</h4>
            <span className="cart-item-price">{item.price}</span>
          </div>
          <button 
            className="btn-remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      
      <div className="cart-footer">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-price">{total.toFixed(2)}</span>
        <button className="btn-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;