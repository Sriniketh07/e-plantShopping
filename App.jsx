import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

const App = () => {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery! 🌱\n\nLet's explore our beautiful plants.");
  };

  return (
    <div className="App">
      {/* Landing Page with background image */}
      <div className="background-image landing-page">
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Home</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default App;
