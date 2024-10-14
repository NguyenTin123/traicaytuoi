import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  // Importing CartContext correctly
import './ProductList.css';
import Footer from './Footer';
import Header from './Header';


const products = [
  { id: 1, name: 'Táo Fuji', price: 30000, image: '/images/tao_fuji_be77e8054173413494c97f613c8e82d3.jpg' },
  { id: 2, name: 'Xoài Cát Hòa Lộc', price: 50000, image: '/images/xoai-cat-hoa-loc-dac-san-noi-tieng-xu-tien-giang-59-.1304.jpg' },
  { id: 3, name: 'Nho Đen Mỹ', price: 70000, image: '/images/images.jpg' },
  { id: 4, name: 'Chuối Cau', price: 20000, image: '/images/images2.jpg' },
  { id: 5, name: 'Dưa Lưới Nhật', price: 80000, image: '/images/73de1c1d-cach-chon-dua-luoi-ngon-2.jpg' },
  { id: 6, name: 'Bưởi Năm Roi', price: 60000, image: '/images/buoi.jpg' },
  { id: 7, name: 'Ổi Lê', price: 25000, image: '/images/oile.jpg' },
  { id: 8, name: 'Thanh Long', price: 40000, image: '/images/thanhlong.jpg' },
  { id: 9, name: 'Mít Thái', price: 30000, image: '/images/mitthai.jpg' },
  { id: 10, name: 'Dưa Hấu', price: 20000, image: '/images/duahau.jpg' },
  { id: 11, name: 'Chôm Chôm', price: 50000, image: '/images/chomchom.jpg' },
  { id: 12, name: 'Vải Thiều', price: 60000, image: '/images/vaithieu.jpg' },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Đảm bảo thêm sản phẩm với số lượng 1
    setNotification(`${product.name} đã được thêm vào giỏ hàng`);
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };
  return (
    <div>
      <Header /> {/* Đảm bảo phần Header được sử dụng */}
      <main>
      <h1>Danh Sách Sản Phẩm</h1>
      {notification && <div className="notification">{notification}</div>}
      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
            </Link>
            <p>Giá: {product.price} VND</p>
            <button onClick={() => handleAddToCart(product)}>Thêm vào Giỏ hàng</button>
          </div>
        ))}
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;
