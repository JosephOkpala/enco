import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Error from './components/Error';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
