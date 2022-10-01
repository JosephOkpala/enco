import img1 from '../assets/african-american.png';
import img2 from '../assets/african-american3.png';
import img3 from '../assets/businessman-leader.png';
// import Testimonials from './Testimonials';
import riskicon from '../assets/risk-icon.png';
import customerservice from '../assets/customer-service-icon.png';
import lowcost from '../assets/low-cost-icon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      <div className="background-img">
        <div className="hero-content" data-aos="fade-up" data-aos-once="true">
          <h1>
            <span className="top-tier">TOP TIER</span> FINANCIAL SOLUTIONS
          </h1>
          <p>
            At Enco Finance we understand what it means to offer financial
            services to our customers.
          </p>
        </div>
      </div>
      <section className="what-we-can-do">
        <h2 data-aos="fade-up" data-aos-once="true">
          Here's what we can do for you
        </h2>
        <p className="services">Services</p>
        <div className="what-we-can-do-content">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="content-text"
          >
            <p>
              The country operates in three major segments of the financial
              system namely the retail, corporate and public sector. In the
              retail segment of the market, it provides short term financing to
              consumers and individuals in the form of personal finance and
              small business finance.
            </p>
            <p>
              In the corporate segment, it provides financing to medium sized
              businesses, distributors and suppliers of major corporates.
            </p>
            <p>
              It provides financing to staff of public entities in the form of
              personal loan, asset financing and salary advance. It partners
              with cooperatives of major private and public sector corporations
              to meet the financing needs of its members.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="content-img"
          >
            <div className="women-img">
              <img src={img1} alt="african-american-woman1" />
              <img src={img2} alt="african-american-woman2" />
            </div>
            <div className="man-img">
              <img src={img3} alt="businessman-leader" />
            </div>
          </div>
        </div>
      </section>
      <section className="reason-to-choose-us">
        <h3 data-aos="fade-up" data-aos-once="true">
          WHY CHOOSE US
        </h3>
        <div className="reasons">
          <div className="each-reason" data-aos="fade-up" data-aos-once="true">
            <img src={riskicon} alt="low-risk-management icon" />
            <p>Low Risk Management</p>
          </div>
          <div className="each-reason" data-aos="fade-up" data-aos-once="true">
            <img src={customerservice} alt="customer-service icon" />
            <p>Excellent Customer Service</p>
          </div>
          <div className="each-reason" data-aos="fade-up" data-aos-once="true">
            <img src={lowcost} alt="low-cost icon" />
            <p>Low Cost Model</p>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
