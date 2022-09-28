import building from '../assets/building-img.png';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import customers from '../assets/customers.png';
import respect from '../assets/respect.png';
import empathy from '../assets/empathy.png';
import ambition from '../assets/ambition.png';
import tenacity from '../assets/tenacity.png';
import integrity from '../assets/integrity.png';

const MissionAndVision = () => {
  return (
    <div className="mission-vision">
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
      <h3>OUR CORE VALUES</h3>
      <p>Amongst other things, these are what we stand for</p>
      <div className="grid">
        <div className="each-grid">
          <img src={customers} alt="customers-first icon" />
          <h4>Customer First</h4>
        </div>
        <div className="each-grid">
          <img src={respect} alt="respect icon" />
          <h4>Respect</h4>
        </div>
        <div className="each-grid">
          <img src={empathy} alt="empathy icon" />
          <h4>Empathy</h4>
        </div>
        <div className="each-grid">
          <img src={ambition} alt="ambition icon" />
          <h4>Ambition</h4>
        </div>
        <div className="each-grid">
          <img src={tenacity} alt="tenacity icon" />
          <h4>Tenacity</h4>
        </div>
        <div className="each-grid">
          <img src={integrity} alt="integrity icon" />
          <h4>Integrity</h4>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <h2>ABOUT ENCO</h2>
      <div className="about">
        <div className="about-text">
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
        <div className="about-image">
          <img src={building} alt="a building" />
        </div>
      </div>
      <MissionAndVision />
      <CoreValues />
    </div>
  );
};

export default About;
