import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🍎 Trái Cây Tươi</Link>
      </div>
      <nav className="navigation">
        <Link to="/">Trang Chủ</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          {getTotalQuantity() > 0 && (
            <span className="cart-count">{getTotalQuantity()}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
