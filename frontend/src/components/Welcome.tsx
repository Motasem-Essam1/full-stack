import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');  // Redirect to the login page if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from local storage
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
