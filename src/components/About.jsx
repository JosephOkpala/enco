import building from '../assets/building-img.png';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import customers from '../assets/customers.png';
import respect from '../assets/respect.png';
import empathy from '../assets/empathy.png';
import ambition from '../assets/ambition.png';
import tenacity from '../assets/tenacity.png';
import integrity from '../assets/integrity.png';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MissionAndVision = () => {
  return (
    <div className="mission-vision" data-aos="fade-up" data-aos-once="true">
      <div className="mission">
        <img src={mission} alt="missions icon" />
        <h4>OUR MISSION</h4>
        <p>
          To help individuals and small businesses get to where they want to be.
        </p>
      </div>
      <div className="vision">
        <img src={vision} alt="vision icon" />
        <h4>OUR VISION</h4>
        <p>
          To become the leading financial services brand in Nigeria driven by
          digital technology dedicated to uplifting and improving quality of
          lives.
        </p>
      </div>
    </div>
  );
};

const CoreValues = () => {
  return (
    <div className="core-values">
      <h3 data-aos="fade-up" data-aos-once="true">
        OUR CORE VALUES
      </h3>
      <p data-aos="fade-up" data-aos-once="true">
        Amongst other things, these are what we stand for
      </p>
      <div className="grid">
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="150"
        >
          <img src={customers} alt="customers-first icon" />
          <h4>Customer First</h4>
        </div>
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <img src={respect} alt="respect icon" />
          <h4>Respect</h4>
        </div>
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="250"
        >
          <img src={empathy} alt="empathy icon" />
          <h4>Empathy</h4>
        </div>
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <img src={ambition} alt="ambition icon" />
          <h4>Ambition</h4>
        </div>
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="350"
        >
          <img src={tenacity} alt="tenacity icon" />
          <h4>Tenacity</h4>
        </div>
        <div
          className="each-grid"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          <img src={integrity} alt="integrity icon" />
          <h4>Integrity</h4>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      <h2>ABOUT ENCO</h2>
      <div className="about">
        <div className="about-text" data-aos="fade-up" data-aos-once="true">
          <p>
            Enco Finance Company Limited was incorporated on 27 March 2018 as a
            limited liabilty company. It obtained its license from the Central
            Bank of Nigeria on 6 February 2020 to operate as a finance company.
          </p>
          <p>
            The business operates on a highly efficient model driven by
            technology and automation. Loan applications, approvals and
            processing are largely online using a work flow process. The company
            operates a low-cost model and a very low risk management philosophy.
          </p>
        </div>
        <div className="about-image" data-aos="fade-up" data-aos-once="true">
          <img src={building} alt="a building" />
        </div>
      </div>

      <MissionAndVision />

      <CoreValues />
    </div>
  );
};

export default About;
