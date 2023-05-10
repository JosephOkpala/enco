import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/Enco-logo-nav.png';
import './styles/Navbar.css';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="nav-shadow">
      <nav>
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Enco-Finance-Logo" className="logo" />
          </a>
        </div>
        <div className="burger" onClick={handleMenuToggle}>
          <div className={`one ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`two ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`three ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <CustomNavLinks to="/" onClick={handleLinkClick}>
            Home
          </CustomNavLinks>

          <CustomNavLinks to="/about" onClick={handleLinkClick}>
            About Enco
          </CustomNavLinks>

          <CustomNavLinks to="/products" onClick={handleLinkClick}>
            Products
          </CustomNavLinks>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
