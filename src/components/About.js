import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about-image.png'; // Adjust the path based on your file location

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Organization" />
        </div>
        <div className="about-text">
          <h2>About Our Organization</h2>
          <p>
            Welcome to the Student Chapter Portal! Our organization is dedicated to fostering a vibrant community for students, providing them with the resources and support needed to succeed academically and professionally. From workshops and seminars to collaborative projects and events, we aim to nurture skills and offer meaningful experiences.
          </p>
          <p>
            Join us in our mission to create a supportive, inclusive environment where students can explore their interests, connect with peers, and achieve their goals. Together, we can make a difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
