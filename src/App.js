import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Products from './components/Products';
// import Error from './components/Error';

const Navbar = lazy(() => import('./Navbar'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Error = lazy(() => import('./components/Error'));

const App = () => {
  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
