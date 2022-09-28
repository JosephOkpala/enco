import { Link } from 'react-router-dom';
import footerlogo from './assets/Enco white Logo.png';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={footerlogo} alt="Footer Logo" className="footer-logo" />
        <div className="each-footer">
          <h4>Office</h4>
          <p className="address">5 Adekunle Lawal Street, Ikoyi, Lagos</p>
        </div>
        <div className="each-footer">
          <h4>Products</h4>
          <Link to="/products" className="margin-bottom">
            Personal Loans
          </Link>
          <Link to="/products">Business Loans</Link>
        </div>
        <div className="each-footer">
          <h4>Contact Us</h4>
          <p className="margin-bottom">01-222-2222</p>
          <p className="margin-bottom">enquiries@encofinance.com</p>
          <div className="socials">
            <Link
              to="https://www.linkedin.com/company/enco-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/enco-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/enco-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="twitter icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/enco-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram-icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/enco-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="youtube icon" />
            </Link>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright 2020. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
