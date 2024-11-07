import React from 'react';
import './NavBar.css';
import logo from '../assets/images/logo.png'; // Path to your logo

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-title">Student Chapter Portal</div>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default NavBar;
