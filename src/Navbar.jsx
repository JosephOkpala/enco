import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/Enco-logo-nav.png';

// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');

//     burger.classList.toggle('toggle');
//   });
// };

// navSlide();

const CustomNavLinks = ({ to, ...props }) => {
  let activeStyle = {
    color: 'hsla(218, 100%, 43%, 1)',
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { color: 'hsla(240, 8%, 15%, 1)' }
      }
      to={to}
      end
      {...props}
    />
  );
};

const Navbar = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');

      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    };

    const burger = ref.current;
    const nav = ref.current;

    burger.addEventListener('click', handleClick);

    return () => {
      burger.removeEventListener('click', handleClick);
      nav.removeEventListener('click', handleClick);
    };
  }, [ref]);
  return (
    <div className="nav-shadow">
      <nav>
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Enco-Finance-Logo" className="logo" />
          </a>
        </div>
        <div className="burger" ref={ref}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="nav-links">
          <CustomNavLinks to="/">Home</CustomNavLinks>

          <CustomNavLinks to="/about">About Enco</CustomNavLinks>

          <CustomNavLinks to="/products">Products</CustomNavLinks>

          <CustomNavLinks to="/contact">Contact</CustomNavLinks>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
