import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>Error 404. Page Not Found</h1>
      <button onClick={() => navigate('')}>Go home</button>
    </div>
  );
};

export default Error;
