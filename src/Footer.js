import React from 'react';
import './Portfolio.css';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>NK</span>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:nak@example.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nak Llantada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
