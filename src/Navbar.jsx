import { NavLink } from 'react-router-dom';
import logo from './assets/Enco-logo-nav.png';

const Navbar = () => {
  return (
    <div className="nav-shadow">
      <nav>
        <div className="nav-logo">
          <NavLink to="/">
            <img src={logo} alt="Enco-Finance-Logo" className="logo" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/products">Products</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
