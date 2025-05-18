import React from 'react';
import homeBanner from '../images/homes.webp'; // Correct path for image import

export default function Home({ user }) {
  return (
    <div className="page-container home-page">
      <div className="home-card">
        <h2>Welcome, <span className="highlight">{user.username}!</span></h2>
        <p>Explore your courses and assessments from the dashboard.</p>
        <img
          src={homeBanner}
          alt="Learning banner"
          className="home-image"
        />
      </div>
    </div>
  );
}
