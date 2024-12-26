import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop'; // Home page
import Product from './pages/Product'; // Single product page
import ShopCategory from './pages/ShopCategory'; // Category pages
import Navbar from './components/Navbar/Navbar'; // Navigation bar
import Cart from './pages/Cart'; // Cart page
import LoginSignup from './pages/LoginSignup'; // Login/Signup page
import Footer from './components/Footer/Footer'; // Footer
import NotFound from './pages/Notfound'; // 404 page
import men_banner from './components/Assets/banner_mens.png';  
import women_banner from './components/Assets/banner_women.png';  
import kid_banner from './components/Assets/banner_kids.png';  

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar (renders on all pages) */}
        <Navbar />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Shop />} />

          {/* Category Routes */}
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />

          {/* Product Routes */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />

          {/* Login/Signup Route */}
          <Route path="/login" element={<LoginSignup />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer (renders on all pages) */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
