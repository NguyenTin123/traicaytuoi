// Code chính của trang chi tiết sản phẩm

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  // Importing CartContext
import './ProductDetail.css';
import Footer from './Footer';
import Header from './Header';

const products = [
  { id: 1, name: 'Táo Fuji', price: 30000, description: 'Táo Fuji có hương vị ngọt, thơm và rất giòn.', image: '/images/tao_fuji_be77e8054173413494c97f613c8e82d3.jpg' },
  { id: 2, name: 'Xoài Cát Hòa Lộc', price: 50000, description: 'Xoài Cát Hòa Lộc nổi tiếng với hương vị ngọt lịm, thơm ngon.', image: '/images/xoai-cat-hoa-loc-dac-san-noi-tieng-xu-tien-giang-59-.1304.jpg' },
  { id: 3, name: 'Nho Đen Mỹ', price: 70000, description: 'Nho Đen Mỹ có vị ngọt đậm, thơm ngon và giàu dinh dưỡng.', image: '/images/images.jpg' },
  { id: 4, name: 'Chuối Cau', price: 20000, description: 'Chuối Cau có vị ngọt đậm, thơm và rất bổ dưỡng.', image: '/images/images2.jpg' },
  { id: 5, name: 'Dưa Lưới Nhật', price: 80000, description: 'Dưa Lưới Nhật có thịt quả ngọt, giòn và thơm mát.', image: '/images/73de1c1d-cach-chon-dua-luoi-ngon-2.jpg' },
  { id: 6, name: 'Bưởi Năm Roi', price: 60000, description: 'Bưởi Năm Roi có vị ngọt, thơm và rất giàu dinh dưỡng.', image: '/images/buoi.jpg' },
  { id: 7, name: 'Ổi Lê', price: 25000, description: 'Ổi Lê có hương vị ngọt thanh, giòn và thơm mát.', image: '/images/oile.jpg' },
  { id: 8, name: 'Thanh Long', price: 40000, description: 'Thanh Long có vị ngọt mát, thơm và rất giàu vitamin.', image: '/images/thanhlong.jpg' },
  { id: 9, name: 'Mít Thái', price: 30000, description: 'Mít Thái có vị ngọt lịm, thơm và rất giòn.', image: '/images/mitthai.jpg' },
  { id: 10, name: 'Dưa Hấu', price: 20000, description: 'Dưa Hấu có vị ngọt thanh, thơm mát và rất bổ dưỡng.', image: '/images/duahau.jpg' },
  { id: 11, name: 'Chôm Chôm', price: 50000, description: 'Chôm Chôm có hương vị ngọt lịm, thơm ngon và mọng nước.', image: '/images/chomchom.jpg' },
  { id: 12, name: 'Vải Thiều', price: 60000, description: 'Vải Thiều có vị ngọt đậm, thơm ngon và giàu vitamin.', image: '/images/vaithieu.jpg' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const initialProductIndex = products.findIndex(p => p.id === parseInt(productId));
  const [currentProductIndex, setCurrentProductIndex] = useState(initialProductIndex);
  const product = products[currentProductIndex];
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');
  const [isZoomed, setIsZoomed] = useState(false); // Thêm state cho phóng to ảnh
  const [quantity, setQuantity] = useState(1); // Thêm state cho số lượng

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setNotification(`${product.name} đã được thêm vào giỏ hàng với số lượng ${quantity}`);
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const showPreviousProduct = (e) => {
    e.stopPropagation();
    setCurrentProductIndex((currentProductIndex - 1 + products.length) % products.length);
  };

  const showNextProduct = (e) => {
    e.stopPropagation();
    setCurrentProductIndex((currentProductIndex + 1) % products.length);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>{product.name}</h1>
        <p>Mã sản phẩm: {product.id} | Tình trạng: Còn hàng</p>
        {notification && <div className="notification">{notification}</div>}
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '200px', height: '200px', cursor: 'pointer' }} 
          onClick={toggleZoom} 
        />
        <p>{product.description}</p>
        <p>Giá: {product.price} VND</p>
        <div className="quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Thêm vào Giỏ hàng</button>
      </div>
      <Footer />
      
      {/* Modal cho phóng to ảnh */}
      {isZoomed && (
        <div className="modal" onClick={toggleZoom}>
          <div className="modal-content">
            <button className="prev-button" onClick={showPreviousProduct}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <img src={product.image} alt={product.name} className="zoomed-image" />
            <button className="next-button" onClick={showNextProduct}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
