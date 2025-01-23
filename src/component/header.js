import React from 'react';
import logo1 from './logo1.png'; 
import '../styles/global.css'; 
const Header = () => {
  return (
    <header className="header">
      
      <nav className="navbar">
       
        <div className="logo">
          <img
            src={logo1} 
            alt="Logo"
            style={{ width: '150px' }}
            className="logo-image"
          />
          
        </div>

       
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <button className="button">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
