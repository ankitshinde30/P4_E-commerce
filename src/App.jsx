import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop'; // Corrected import (capitalized S in Shop)
import Product from './pages/Product'; // Ensure this file exists
import ShopCategory from './pages/ShopCategory'; // Ensure this file exists
import Navbar from './components/Navbar/Navbar'; // Assuming Navbar is used for navigation
import Cart from './pages/Cart'; // Corrected capitalization for "Cart"
import LoginSignup from './pages/LoginSignup'; // Ensure this file exists
import { useState } from 'react'; // Import useState only if needed
import Footer from "./components/Footer/Footer";


function App() {
  // Remove count and setCount if not used
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        {/* Navbar (renders on all pages) */}
        <Navbar />
       
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Shop />} />
          {/* Category Routes */}
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />
          {/* Login/Signup Route */}
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
