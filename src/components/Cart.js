import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotalPrice } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleCheckout = () => {
    setNotification('Thanh toán thành công!');
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  return (
    <div>
      <Header />
      <h1>Giỏ Hàng Của Bạn</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          {notification && <div className="notification">{notification}</div>}
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price} VND</p>
                <button onClick={() => removeFromCart(product)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => addToCart(product)}>+</button>
                <Link to={`/product/${product.id}`}>Chi tiết</Link>
              </li>
            ))}
          </ul>
          <h2 className="cart-total">Tổng tiền: {getTotalPrice()} VND</h2>
          <button className="checkout" onClick={handleCheckout}>Thanh toán</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
