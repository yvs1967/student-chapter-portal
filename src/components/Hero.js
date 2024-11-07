import React from 'react';
import './Hero.css';
import video from '../assets/videos/background-video.mp4'; // Adjust the path based on your file location

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-title animate-text">Welcome to Student Chapter Portal</h1>
      </div>
    </div>
  );
};

export default Hero;
