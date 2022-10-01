import { NavLink } from 'react-router-dom';
import logo from './assets/Enco-logo-nav.png';

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
  return (
    <div className="nav-shadow">
      <nav>
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Enco-Finance-Logo" className="logo" />
          </a>
        </div>
        <div className="nav-links">
          <CustomNavLinks to="/">Home</CustomNavLinks>

          <CustomNavLinks to="/about">About Enco</CustomNavLinks>

          <CustomNavLinks to="/products" id="product">
            Products
          </CustomNavLinks>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
