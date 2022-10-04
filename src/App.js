import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Product.css';
import './styles/Testimonials.css';
import './styles/Footer.css';
import Navbar from './Navbar';
// import Footer from './Footer';
import Home from './components/Home';
// import About from './components/About';
// import Products from './components/Products';
import Error from './components/Error';
const LazyProducts = React.lazy(() => import('./components/Products'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyFooter = React.lazy(() => import('./Footer'));

// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');

//     burger.classList.toggle('toggle');
//   });
// };

// navSlide();

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback="Loading...">
              <LazyProducts />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Suspense fallback="Loading...">
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default App;
