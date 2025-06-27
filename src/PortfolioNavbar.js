import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Portfolio.css';

function PortfolioNavbar() {
  const location = useLocation();
  
  return (
    <nav className="portfolio-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">NK</Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>
        
        <div className="navbar-buttons">
          <button className="theme-toggle">
            <span role="img" aria-label="Theme Toggle">🌙</span>
          </button>
          <a href="/resume.pdf" download className="resume-button">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
