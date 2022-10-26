import { Link } from 'react-router-dom';
import footerlogo from './assets/Enco white Logo.png';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import './styles/Footer.css';

const Footer = ({ product, productTwo }) => {
  const scrollToProducts = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
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
          <Link onClick={() => scrollToProducts(product)} to="/products">
            Personal Loans
          </Link>
          <Link onClick={() => scrollToProducts(productTwo)}>
            Business Loans
          </Link>
        </div>
        <div className="each-footer">
          <h4>Contact Us</h4>
          <p className="">01-222-2222</p>
          <p
            onClick={() =>
              (window.location = 'mailto:enquiries@encofinance.com')
            }
            className="margin-bottom"
          >
            enquiries@encofinance.com
          </p>
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
      {/* <a target="_blank" href="https://www.google.com/maps/dir//Ikoyi%20Lagos">
        <img
          class="venue-map"
          src="https://maps.googleapis.com/maps/api/staticmap?size=300x100&amp;markers=icon:https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/map_marker_event_page.png%7CAjah%20Lagos&amp;style=feature:poi|visibility:off&amp;style=feature:transit|visibility:off&amp;key=AIzaSyBdTVDmXjzqG7Pn8O96SCgrlca6jk3CxLM"
        />
      </a> */}
    </footer>
  );
};

export default Footer;
