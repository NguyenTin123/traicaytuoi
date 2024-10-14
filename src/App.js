
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CartProvider } from './context/CartContext';
// import HomePage from './pages/HomePage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<HomePage />} />
//           <Route path="/product/:productId" element={<ProductDetailPage />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
