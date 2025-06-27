import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const navStyle = {
    padding: '1rem 2rem',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: 'rgba(255,255,255,0.2)',
    transform: 'translateY(-1px)'
  };

  return (
    <nav style={navStyle}>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        🏠 TechSolutions
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link 
          to="/" 
          style={location.pathname === '/' ? activeLinkStyle : linkStyle}
          onMouseEnter={(e) => {
            if (location.pathname !== '/') {
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/') {
              e.target.style.background = 'transparent';
            }
          }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={location.pathname === '/about' ? activeLinkStyle : linkStyle}
          onMouseEnter={(e) => {
            if (location.pathname !== '/about') {
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/about') {
              e.target.style.background = 'transparent';
            }
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
