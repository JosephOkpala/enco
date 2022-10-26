import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="error-page">
        <div className="error-text">
          <h1>Page not found...</h1>
          <p>Sorry the page you're looking for dosen't exist.</p>
        </div>
        <button onClick={() => navigate('')}>Take me home</button>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
