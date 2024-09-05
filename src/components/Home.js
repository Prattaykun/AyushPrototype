import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to AYUSH Startup Registration Portal</h1>
      <div className="nav">
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;
