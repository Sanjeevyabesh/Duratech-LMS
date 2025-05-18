import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Duratech LMS</h1>
      <p>Choose a section below:</p>
      <ul>
        <li><Link to="/courses">Browse Courses</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
