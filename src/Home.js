import React, { useState, useEffect } from 'react';
import profileImage from './img/image.png';

// Add animations
const keyframes = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.07;
    }
    100% {
      transform: scale(1.05);
      opacity: 0.12;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .hero-container {
      flex-direction: column !important;
      gap: 2rem !important;
    }
    
    .profile-overlap {
      margin-left: 0 !important;
      margin-top: -30px !important;
    }
    
    .text-content {
      text-align: center !important;
      max-width: 100% !important;
    }
    
    .contact-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem !important;
    }
    
    .desktop-nav {
      display: none !important;
    }
    
    .mobile-menu-btn {
      display: flex !important;
    }
    
    .mobile-menu {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: var(--nav-bg);
      backdrop-filter: blur(10px);
      padding: 1rem 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      z-index: 999;
    }
  }
  
  @media (min-width: 769px) {
    .mobile-menu-btn {
      display: none !important;
    }
  }
  
  @media (max-width: 480px) {
    .contact-grid {
      grid-template-columns: 1fr !important;
    }
    
    .nav-brand {
      font-size: 1.2rem !important;
    }
  }
`;

function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showProject, setShowProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [formMessage, setFormMessage] = useState('');
  
  // Tracking scroll position to update active navigation and parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);
      
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if(currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject CSS styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamic styles based on dark/light mode
  const theme = isDarkMode ? {
    background: '#0f172a',
    textPrimary: '#ffffff',
    textSecondary: '#94a3b8',
    accent: '#06b6d4',
    card: '#1e293b',
    cardBorder: '#334155',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    secondaryAccent: '#f97316',
    cardHover: '#334155'
  } : {
    background: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    accent: '#0284c7',
    card: '#ffffff',
    cardBorder: '#e2e8f0',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    secondaryAccent: '#f97316',
    cardHover: '#f1f5f9'
  };
  
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "HMO Portal System",
      description: "Multi-role healthcare management portal with three distinct dashboards: Admin for analytics and oversight, HR for employee management, and Employee portal for online consultation scheduling with priority queuing.",
      tech: ["Laravel", "Vue.js", "MySQL", "WebSockets", "Bootstrap"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=HMO+Portal",
      client: "OmniQuest Inc."
    },
    {
      id: 2,
      title: "Inventory with QR Code System",
      description: "Complete asset tracking system using QR codes to monitor the full lifecycle of items. Tracks purchase details, expiration dates, current location, and complete movement history of each inventory item.",
      tech: ["Laravel", "JavaScript", "QR Code API", "MySQL", "Bootstrap"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=QR+Inventory",
      client: "Philippine Statistical Research and Training Institute"
    },
    {
      id: 3,
      title: "HRIS with Payroll System",
      description: "Human Resources Information System with integrated payroll functionality for a government agency, featuring employee management, leave tracking, payroll calculation, and comprehensive reporting.",
      tech: ["Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=HRIS+System",
      client: "Philippine Statistical Research and Training Institute"
    },
    {
      id: 4,
      title: "E-commerce API Integration",
      description: "Integration platform connecting client's inventory system with Shopify and eBay marketplaces, allowing for seamless product listing, inventory sync, and order management across multiple channels.",
      tech: ["PHP", "React.js", "Shopify API", "eBay API", "MySQL"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=E-commerce+API",
      client: "Hammerulo Data Corporation"
    },
    {
      id: 5,
      title: "Single Sign-On System",
      description: "Centralized authentication system allowing users to access multiple applications with one set of credentials. Integrates with ticketing system and inventory management via custom API endpoints.",
      tech: ["Laravel", "RESTful API", "OAuth 2.0", "MySQL", "Vue.js"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=SSO+System",
      client: "Philippine Statistical Research and Training Institute"
    },
    {
      id: 6,
      title: "Cloud Server Infrastructure",
      description: "Designed and deployed scalable cloud infrastructure for client applications using AWS, Google Cloud, and Linode. Implemented security best practices, automated backups, and monitoring systems.",
      tech: ["AWS", "Google Cloud", "Linode", "Docker", "Linux/Ubuntu"],
      image: "https://dummyimage.com/600x400/0284c7/ffffff.png&text=Cloud+Infra"
    }
  ];

  // Skills data
  const skillCategories = [
    {
      category: "Frontend Libraries and Tools",
      skills: ["JavaScript", "ReactJS", "jQuery", "Vue.js"]
    },
    {
      category: "Backend & Database",
      skills: ["PHP", "Laravel", "MySQL", "REST APIs", "SOAP API", "GraphQL", "CodeIgniter", "Symfony"]
    },
    {
      category: "DevOps & Infrastructure",
      skills: ["AWS", "Google Cloud", "Linux/Ubuntu", "Docker", "Cloudflare"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "WordPress", "VS Code", "Agile Methodologies"]
    }
  ];
  
  // Form handling
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFormSubmit = () => {
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setFormMessage('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission success
    setFormStatus('success');
    setFormMessage('Your message has been sent! I will get back to you soon.');
    
    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
      setFormMessage('');
    }, 5000);
  };
  
  return (
    <div style={{ 
      background: theme.background, 
      color: theme.textPrimary,
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      <style>
        {keyframes}
      </style>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        padding: '1.5rem 2rem',
        background: theme.background,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '--nav-bg': theme.background
      }}>
        <div className="nav-brand" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          color: theme.accent
        }}>
          Nak Roque Llantada
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            onClick={() => scrollToSection('home')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: activeSection === 'home' ? theme.accent : theme.textPrimary,
              fontWeight: activeSection === 'home' ? '600' : '400',
              fontSize: '1rem',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0',
              transition: 'all 0.3s ease'
            }}
          >
            Home
            {activeSection === 'home' && (
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: theme.accent,
                transition: 'all 0.3s ease'
              }}></div>
            )}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: activeSection === 'about' ? theme.accent : theme.textPrimary,
              fontWeight: activeSection === 'about' ? '600' : '400',
              fontSize: '1rem',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0',
              transition: 'all 0.3s ease'
            }}
          >
            About
            {activeSection === 'about' && (
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: theme.accent,
                transition: 'all 0.3s ease'
              }}></div>
            )}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: activeSection === 'projects' ? theme.accent : theme.textPrimary,
              fontWeight: activeSection === 'projects' ? '600' : '400',
              fontSize: '1rem',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0',
              transition: 'all 0.3s ease'
            }}
          >
            Projects
            {activeSection === 'projects' && (
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: theme.accent,
                transition: 'all 0.3s ease'
              }}></div>
            )}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: activeSection === 'contact' ? theme.accent : theme.textPrimary,
              fontWeight: activeSection === 'contact' ? '600' : '400',
              fontSize: '1rem',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0',
              transition: 'all 0.3s ease'
            }}
          >
            Contact
            {activeSection === 'contact' && (
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: theme.accent,
                transition: 'all 0.3s ease'
              }}></div>
            )}
          </button>
          <button 
            onClick={toggleDarkMode} 
            style={{ 
              background: 'transparent',
              border: 'none',
              color: theme.textPrimary,
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
              </svg>
              : 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
              </svg>
            }
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: theme.textPrimary,
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {isMobileMenuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          background: theme.background,
          backdropFilter: 'blur(10px)',
          padding: '1rem 2rem 2rem 2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          zIndex: 999,
          borderBottom: '1px solid ' + theme.cardBorder
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              onClick={() => {
                scrollToSection('home');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                background: 'transparent',
                border: 'none',
                color: activeSection === 'home' ? theme.accent : theme.textPrimary,
                fontWeight: activeSection === 'home' ? '600' : '400',
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                transition: 'all 0.3s ease'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                background: 'transparent',
                border: 'none',
                color: activeSection === 'about' ? theme.accent : theme.textPrimary,
                fontWeight: activeSection === 'about' ? '600' : '400',
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                transition: 'all 0.3s ease'
              }}
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection('projects');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                background: 'transparent',
                border: 'none',
                color: activeSection === 'projects' ? theme.accent : theme.textPrimary,
                fontWeight: activeSection === 'projects' ? '600' : '400',
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                transition: 'all 0.3s ease'
              }}
            >
              Projects
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                background: 'transparent',
                border: 'none',
                color: activeSection === 'contact' ? theme.accent : theme.textPrimary,
                fontWeight: activeSection === 'contact' ? '600' : '400',
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
      
      
      {/* Hero Section */}
      <section id="home" style={{ 
        padding: '8rem 2rem 6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Enhanced Animated background elements with parallax */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          opacity: isDarkMode ? '0.12' : '0.08',
          backgroundImage: `radial-gradient(circle at 25px 25px, ${theme.accent} 3%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, ${theme.secondaryAccent} 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
          zIndex: 0,
          animation: 'pulse 4s ease-in-out infinite alternate',
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>
        
        {/* Large geometric shapes with parallax */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDarkMode 
            ? `radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)`
            : `radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(2,132,199,0.04) 50%, transparent 70%)`,
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          filter: 'blur(1px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-200px',
          left: '-200px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isDarkMode 
            ? `radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 50%, transparent 70%)`
            : `radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.03) 50%, transparent 70%)`,
          zIndex: 0,
          transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)`,
          filter: 'blur(1px)'
        }}></div>
        
        {/* Additional floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.accent}40, transparent)`,
          zIndex: 1,
          transform: `translateY(${scrollY * 0.4}px)`,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.secondaryAccent}40, transparent)`,
          zIndex: 1,
          transform: `translateY(${scrollY * 0.6}px)`,
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{ 
          position: 'relative', 
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {/* Profile picture */}
          <div style={{
            animation: 'fadeIn 1s ease-out forwards',
          }}>
            <div style={{
              width: '280px',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            >
              <img 
                src={profileImage} 
                alt="Nak Roque Llantada" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
          {/* Text content */}
          <div style={{ 
            textAlign: 'left',
            maxWidth: '500px',
            animation: 'slideInRight 0.8s ease-out forwards'
          }}>
            
            <h1 style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem', 
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : theme.textPrimary,
              background: isDarkMode ? 'none' : theme.gradient,
              WebkitBackgroundClip: isDarkMode ? 'initial' : 'text',
              WebkitTextFillColor: isDarkMode ? '#ffffff' : 'transparent',
              backgroundClip: isDarkMode ? 'initial' : 'text',
              textShadow: isDarkMode ? '0 10px 30px rgba(6,182,212,0.3)' : '0 10px 30px rgba(2,132,199,0.1)',
              filter: isDarkMode ? 'drop-shadow(0 0 10px rgba(6,182,212,0.3))' : 'none'
            }}>
              Nak Roque Llantada
            </h1>
            
            <div style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              color: theme.accent,
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              Full Stack Web Application Developer
            </div>
            
            <div style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <a 
                href="https://www.credly.com/badges/02433f3c-5534-426a-95e2-5c4745409531/linked_in?t=sipx6t" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: isDarkMode ? '#06b6d4' : '#0284c7',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'brightness(1.2)';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'brightness(1)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                AWS Certified Cloud Practitioner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '6px' }}>
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </a>
            </div>
            
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              lineHeight: '1.8', 
              color: theme.textSecondary 
            }}>
              Expert in building scalable web applications with PHP/Laravel, JavaScript,
              and cloud technologies. Specialized in creating e-commerce integrations,
              enterprise systems, and secure server infrastructures.
            </p>
          </div>
        </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => scrollToSection('contact')}
            style={{
              background: `linear-gradient(135deg, ${theme.accent} 0%, ${isDarkMode ? '#0891b2' : '#0369a1'} 100%)`,
              color: '#ffffff',
              border: 'none',
              padding: '0.85rem 2.5rem',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Contact Me
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            style={{
              background: 'transparent',
              color: theme.textPrimary,
              border: '2px solid ' + theme.accent,
              padding: '0.85rem 2.5rem',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              marginRight: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.background = isDarkMode ? 'rgba(6,182,212,0.1)' : 'rgba(14,165,233,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'transparent';
            }}
          >
            View My Work
          </button>
          <a 
            href={`${process.env.PUBLIC_URL}/resume/Nak_LlantadaCV.pdf`}
            download
            style={{
              background: 'transparent',
              color: theme.textPrimary,
              border: '2px solid ' + theme.accent,
              padding: '0.85rem 2.5rem',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.background = isDarkMode ? 'rgba(6,182,212,0.1)' : 'rgba(14,165,233,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'transparent';
            }}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ 
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: theme.accent,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>About Me</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent, margin: '0 auto 3rem auto' }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'flex-start'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: theme.textPrimary }}>Who I Am</h3>
            <p style={{ fontSize: '1.1rem', color: theme.textSecondary, lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I'm a Full Stack Web Application Developer with extensive experience in building modern, 
              scalable web applications. I combine strong technical skills with a deep understanding 
              of business requirements to deliver solutions that drive real value.
            </p>
            <p style={{ fontSize: '1.1rem', color: theme.textSecondary, lineHeight: '1.8', marginBottom: '2rem' }}>
              My expertise spans the entire development lifecycle, from concept and design through 
              to deployment and maintenance. I'm passionate about clean code architecture, performance 
              optimization, and creating exceptional user experiences.
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: theme.textPrimary }}>Experience</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Sr. Software Developer</div>
                <div style={{ color: theme.accent }}>April 2021 - Present</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Hammerulo Data Corporation, Taguig City</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Develop and maintain web applications</li>
                <li>Integrate e-commerce API to web applications (Ebay and Shopify)</li>
                <li>Develop front-end website architecture using ReactJs</li>
                <li>Develop back-end website applications using Laravel</li>
                <li>Create and maintain servers (AWS, Linode, Google Cloud)</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Freelance Web Developer</div>
                <div style={{ color: theme.accent }}>2018 - Present</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Self-employed</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Server configuration and management for client websites using Linux/Ubuntu</li>
                <li>Performance optimization for WordPress sites using OpenLiteSpeed</li>
                <li>Implementation of security measures and CDN integration with Cloudflare</li>
                <li>Development of custom web solutions for various clients</li>
                <li>Ongoing maintenance and support for client websites and applications</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Highly Technical ICT Consultant</div>
                <div style={{ color: theme.accent }}>January 2021 - December 2021</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Philippine Statistical Research and Training Institute, Quezon City</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Developed Human Resources Information System (HRIS) with Payroll System using Laravel</li>
                <li>Developed Single Sign-in application and integrated other applications via API</li>
                <li>Supervised Jr. Developers for better coding practices</li>
                <li>Created system documentation for users and knowledge management</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Senior Full Stack Web Application Developer</div>
                <div style={{ color: theme.accent }}>May 2020 - April 2021</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Philippine Statistical Research and Training Institute, Quezon City</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Developed applications for day-to-day operations</li>
                <li>Created inventory system using QR code to track assets from purchase to disposal</li>
                <li>Provided IT support to end-users across the organization</li>
                <li>Conducted technical training for staff and other users</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Full Stack Web Application Developer</div>
                <div style={{ color: theme.accent }}>June 2019 - April 2020</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Philippine Statistical Research and Training Institute, Quezon City</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Developed web applications for research and training management</li>
                <li>Created and maintained databases for research data and analytics</li>
                <li>Implemented security protocols for data protection</li>
                <li>Designed user interfaces for internal applications</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>AWS Certified Cloud Practitioner</div>
                <div style={{ color: theme.accent }}>April 2019</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Amazon Web Services</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Validated technical expertise and knowledge of AWS Cloud services</li>
                <li>Proficient in AWS core services, security best practices, and cloud architecture concepts</li>
                <li>Demonstrated understanding of cloud economics, billing, and basic AWS deployment models</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Sr. Application Developer</div>
                <div style={{ color: theme.accent }}>May 2018 - August 2019</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>OmniQuest Inc. | Reliance Group of Companies</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Developed front-end website architecture</li>
                <li>Designed user interactions on web pages</li>
                <li>Developed back-end website applications</li>
                <li>Ensured cross-platform optimization for mobile phones</li>
                <li>Created and maintained servers (AWS)</li>
                <li>Secured APIs and server connections for user data privacy (HMO DATA)</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: theme.textPrimary }}>Web Developer</div>
                <div style={{ color: theme.accent }}>2017 - 2018</div>
              </div>
              <div style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>Magnalux Digital Incorporation</div>
              <ul style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Developed a comprehensive Payroll System with time tracking and reporting features</li>
                <li>Created custom e-commerce websites for clients across various industries</li>
                <li>Built and maintained WordPress projects with custom themes and plugins</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                <li>Collaborated with design and marketing teams to deliver integrated digital solutions</li>
              </ul>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ 
              background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: theme.textPrimary }}>Key Strengths</h3>
              <ul style={{ 
                color: theme.textSecondary, 
                fontSize: '0.95rem', 
                lineHeight: '1.8',
                paddingLeft: '1.5rem',
                listStyleType: 'disc'
              }}>
                <li>Proficient in PHP, Laravel, and MySQL for backend development</li>
                <li>Skilled in JavaScript frameworks like ReactJS and Vue.js for frontend development</li>
                <li>Experienced in building RESTful and SOAP APIs for seamless integration</li>
                <li>Knowledgeable in cloud services (AWS, Google Cloud) and server management</li>
                <li>Strong understanding of database design, optimization, and security</li>
                <li>Adept in using version control (Git), project management tools, and CI/CD pipelines</li>
              </ul>
            </div>
            
            <div style={{ 
              background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: theme.textPrimary }}>Technical Skills</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                gap: '1rem'
              }}>
                {[
                  'PHP', 'Laravel', 'MySQL', 'JavaScript', 'ReactJS', 'Vue.js', 
                  'REST APIs', 'SOAP API', 'GraphQL', 'AWS', 'Google Cloud', 
                  'Linux/Ubuntu', 'Docker', 'Git', 'WordPress', 'Agile Methodologies'
                ].map((skill, index) => (
                  <div key={index} style={{ 
                    padding: '0.8rem',
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                  }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Education Section */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: theme.accent, marginBottom: '2rem', textAlign: 'center' }}>
            Certifications & Education
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            <div style={{ 
              background: theme.card, 
              borderRadius: '10px', 
              padding: '1.5rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: theme.textPrimary }}>Certifications</h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <a 
                  href="https://www.credly.com/badges/02433f3c-5534-426a-95e2-5c4745409531/linked_in?t=sipx6t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ 
                    fontWeight: '600', 
                    color: theme.accent, 
                    marginBottom: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    AWS Certified Cloud Practitioner
                    <span style={{ fontSize: '0.8rem' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </span>
                  </div>
                  <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
                    Amazon Web Services
                  </div>
                </a>
              </div>
              

            </div>
            
            <div style={{ 
              background: theme.card, 
              borderRadius: '10px', 
              padding: '1.5rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: theme.textPrimary }}>Education</h3>
              
              <div>
                <div style={{ fontWeight: '600', color: theme.accent, marginBottom: '0.25rem' }}>
                  Bachelor of Science in Computer Science
                </div>
                <div style={{ fontWeight: '500', color: theme.textPrimary, marginBottom: '0.25rem' }}>
                  AMA Computer University
                </div>
                <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
                  Graduated 2019
                </div>
              </div>
            </div>
            
            <div style={{ 
              background: theme.card, 
              borderRadius: '10px', 
              padding: '1.5rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: theme.textPrimary }}>Organizations</h3>
              
              <div>
                <div style={{ fontWeight: '600', color: theme.accent, marginBottom: '0.25rem' }}>
                  Active Member
                </div>
                <div style={{ fontWeight: '500', color: theme.textPrimary, marginBottom: '0.25rem' }}>
                  CFC Couple for Christ
                </div>
                <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
                  Community service and spiritual growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ 
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: theme.accent,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>My Projects</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent, margin: '0 auto 3rem auto' }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={{ 
                background: theme.card,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid ' + theme.cardBorder,
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                position: 'relative',
                animation: 'fadeIn 0.8s ease-out forwards',
                animationDelay: `${0.2 * project.id}s`,
                opacity: 0
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = isDarkMode 
                  ? `0 15px 40px rgba(6,182,212,0.2)` 
                  : `0 15px 40px rgba(2,132,199,0.15)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.secondaryAccent} 100%)`,
                  color: 'white',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  Featured
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '0.5rem',
                  color: theme.textPrimary 
                }}>
                  {project.title}
                </h3>
                {project.client && (
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: theme.accent,
                    marginBottom: '0.75rem',
                    fontStyle: 'italic'
                  }}>
                    {project.client}
                  </div>
                )}
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6',
                  color: theme.textSecondary,
                  marginBottom: '1.5rem' 
                }}>
                  {project.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem' 
                }}>
                  {project.tech.map((tech, index) => (
                    <div key={index} style={{ 
                      padding: '0.25rem 0.75rem',
                      background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                      color: theme.accent,
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setShowProject(project.id)}
                  style={{
                    background: 'transparent',
                    color: theme.accent,
                    border: '1px solid ' + theme.accent,
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {showProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1rem'
          }}>
            <div style={{
              background: theme.card,
              borderRadius: '10px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button 
                onClick={() => setShowProject(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  color: theme.textPrimary,
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  zIndex: 1
                }}
              >
                ×
              </button>
              
              {(() => {
                // Handle both project IDs and direct project objects
                const project = typeof showProject === 'object' ? showProject : projects.find(p => p.id === showProject);
                
                if (!project) { 
                  return null; 
                }
                
                // Project-specific detailed content
                let detailedContent = null;
                if (project.id === 1) { // HMO Portal System
                  detailedContent = (
                    <div style={{ 
                      background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: theme.accent }}>Portal Components:</h4>
                      <ul style={{ 
                        paddingLeft: '1.5rem',
                        color: theme.textSecondary,
                        lineHeight: '1.6'
                      }}>
                        <li><strong>Admin Dashboard</strong> - Complete oversight of the healthcare network with real-time analytics, provider management, and system configuration</li>
                        <li><strong>HR Portal</strong> - Tools for company HR departments to manage employee healthcare benefits, enrollment, and claims processing</li>
                        <li><strong>Employee Dashboard</strong> - Self-service platform for scheduling consultations with priority queuing, viewing benefits, and managing personal health records</li>
                        <li>Real-time notifications and appointment reminders via email and SMS</li>
                        <li>Secure document upload and sharing for medical records</li>
                        <li>Integration with healthcare provider systems for seamless appointment management</li>
                      </ul>
                    </div>
                  );
                } else if (project.id === 2) { // Inventory QR System
                  detailedContent = (
                    <div style={{ 
                      background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: theme.accent }}>Key Features:</h4>
                      <ul style={{ 
                        paddingLeft: '1.5rem',
                        color: theme.textSecondary,
                        lineHeight: '1.6'
                      }}>
                        <li>QR code generation for each inventory item with unique identifiers</li>
                        <li>Complete tracking of item lifecycle from purchase to disposal</li>
                        <li>Location history and current position tracking</li>
                        <li>Expiration date monitoring and alerts</li>
                        <li>Mobile-responsive interface for scanning QR codes and updating locations</li>
                        <li>Comprehensive reporting on inventory aging and movement patterns</li>
                      </ul>
                    </div>
                  );
                } else if (project.title === "Remotify.ph - Remote Job Platform") {
                  detailedContent = (
                    <div style={{ 
                      background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: theme.accent }}>Infrastructure & Security:</h4>
                      <ul style={{ 
                        paddingLeft: '1.5rem',
                        color: theme.textSecondary,
                        lineHeight: '1.6'
                      }}>
                        <li><strong>Cloudflare Integration</strong> - Configured CDN for faster global content delivery, implemented DDoS protection, and managed SSL certificates</li>
                        <li><strong>Performance Optimization</strong> - Implemented OpenLiteSpeed specifically optimized for WordPress applications, server-side caching, and asset delivery optimization</li>
                        <li><strong>Security Measures</strong> - Implemented brute force protection, web application firewall, and regular security audits</li>
                        <li><strong>Monitoring & Maintenance</strong> - Set up uptime monitoring, error tracking, and ongoing infrastructure support</li>
                      </ul>
                    </div>
                  );
                }
                
                return (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ padding: '2rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '1rem',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                      }}>
                        <h3 style={{ 
                          fontSize: '1.8rem', 
                          color: theme.textPrimary 
                        }}>
                          {project.title}
                        </h3>
                        {project.client && (
                          <div style={{
                            background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                            color: theme.accent,
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontWeight: '500'
                          }}>
                            {project.client}
                          </div>
                        )}
                      </div>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8',
                        color: theme.textSecondary,
                        marginBottom: detailedContent ? '1rem' : '2rem' 
                      }}>
                        {project.description}
                      </p>
                      
                      {detailedContent}
                      <div>
                        <h4 style={{ 
                          fontSize: '1.2rem', 
                          marginBottom: '1rem',
                          color: theme.textPrimary 
                        }}>
                          Technologies Used:
                        </h4>
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          marginBottom: '2rem' 
                        }}>
                          {project.tech.map((tech, index) => (
                            <div key={index} style={{ 
                              padding: '0.5rem 1rem',
                              background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                              color: theme.accent,
                              borderRadius: '20px',
                              fontSize: '1rem',
                              fontWeight: '500'
                            }}>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </section>
      
      {/* Freelance Projects Section */}
      <section id="freelanceProjects" style={{ 
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: theme.accent,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>Freelance Projects</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent, margin: '0 auto 3rem auto' }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {/* AV Suites */}
          <div 
            style={{ 
              background: theme.card,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder,
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out forwards',
              opacity: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = isDarkMode 
                ? `0 15px 40px rgba(6,182,212,0.2)` 
                : `0 15px 40px rgba(2,132,199,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="https://dummyimage.com/600x400/0284c7/ffffff.png&text=AV+Suites" 
                alt="AV Suites"
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                color: 'white',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Active
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                color: theme.textPrimary 
              }}>
                AV Suites - Boutique Hotel
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                color: theme.textSecondary,
                marginBottom: '1.5rem' 
              }}>
                Developed website for a luxury boutique hotel overlooking the Mindoro Strait in Puerto Galera, Oriental Mindoro. Designed the booking system and integrated virtual tour of the property featuring private balconies, ocean views, and recently refurbished accommodations.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                {["WordPress", "Booking System", "Virtual Tour", "SEO", "Responsive Design"].map((tech, index) => (
                  <span key={index} style={{ 
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a 
                  href="https://avsuites.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          
          {/* Remotify.ph */}
          <div 
            style={{ 
              background: theme.card,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder,
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.1s',
              opacity: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = isDarkMode 
                ? `0 15px 40px rgba(6,182,212,0.2)` 
                : `0 15px 40px rgba(2,132,199,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="https://dummyimage.com/600x400/0284c7/ffffff.png&text=Remotify.ph" 
                alt="Remotify.ph"
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                color: 'white',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Active
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                color: theme.textPrimary 
              }}>
                Remotify.ph
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                color: theme.textSecondary,
                marginBottom: '1.5rem' 
              }}>
                Deployed and managed high-availability infrastructure for a remote job listing platform. Implemented Linode servers, RDS databases, object storage with daily 3-day backups for source code and database. Set up Cloudflare for CDN, DDoS protection, firewall, and reverse proxy.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                {["Linode", "AWS RDS", "Object Storage", "CloudFlare", "Linux", "Auto-Backup"].map((tech, index) => (
                  <span key={index} style={{ 
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a 
                  href="https://remotify.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          
          {/* Felson Tech */}
          <div 
            style={{ 
              background: theme.card,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder,
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = isDarkMode 
                ? `0 15px 40px rgba(6,182,212,0.2)` 
                : `0 15px 40px rgba(2,132,199,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="https://dummyimage.com/600x400/0284c7/ffffff.png&text=Felson+Tech" 
                alt="Felson Tech"
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                color: 'white',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Active
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                color: theme.textPrimary 
              }}>
                Felson Technology & Solutions Corporation
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                color: theme.textSecondary,
                marginBottom: '1.5rem' 
              }}>
                Built and managed corporate website for one of the competitive trading companies in the Philippines engaged in wholesaling and retailing of high quality hardware materials nationwide.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                {["HTML/CSS", "JavaScript", "Bootstrap", "PHP", "jQuery"].map((tech, index) => (
                  <span key={index} style={{ 
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a 
                  href="https://felsontech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: `linear-gradient(135deg, ${theme.accent} 0%, #10b981 100%)`,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          
          {/* LawBasePh */}
          <div 
            style={{ 
              background: theme.card,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder,
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = isDarkMode 
                ? `0 15px 40px rgba(6,182,212,0.2)` 
                : `0 15px 40px rgba(2,132,199,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="https://dummyimage.com/600x400/0284c7/ffffff.png&text=LawBasePh" 
                alt="LawBasePh"
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `linear-gradient(135deg, ${theme.secondaryAccent} 0%, #dc2626 100%)`,
                color: 'white',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Inactive
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                color: theme.textPrimary 
              }}>
                LawBasePh
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                color: theme.textSecondary,
                marginBottom: '1.5rem' 
              }}>
                Created legal case management system with document organization, client profiles, and calendar integration.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                {["Laravel", "MySQL", "Vue.js", "Bootstrap", "REST API"].map((tech, index) => (
                  <span key={index} style={{ 
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dela Rosa & Casilla Law */}
          <div 
            style={{ 
              background: theme.card,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid ' + theme.cardBorder,
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = isDarkMode 
                ? `0 15px 40px rgba(6,182,212,0.2)` 
                : `0 15px 40px rgba(2,132,199,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="https://dummyimage.com/600x400/0284c7/ffffff.png&text=Dela+Rosa+%26+Casilla+Law" 
                alt="Dela Rosa & Casilla Law"
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `linear-gradient(135deg, ${theme.secondaryAccent} 0%, #dc2626 100%)`,
                color: 'white',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Inactive
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                color: theme.textPrimary 
              }}>
                Dela Rosa & Casilla Law
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                color: theme.textSecondary,
                marginBottom: '1.5rem' 
              }}>
                Designed and developed a comprehensive website for a boutique law firm specializing in corporate law, civil litigation, and family law, featuring attorney profiles, detailed practice areas, client resources, and an integrated contact system.
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem' 
              }}>
                {["WordPress", "CSS", "JavaScript", "PHP", "Contact Form 7"].map((tech, index) => (
                  <span key={index} style={{ 
                    background: isDarkMode ? 'rgba(100,255,218,0.1)' : 'rgba(75,108,183,0.1)',
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center',
          marginTop: '2.5rem',
          fontSize: '1.1rem',
          color: theme.textSecondary,
          padding: '1.5rem',
          background: isDarkMode ? 'rgba(100,255,218,0.05)' : 'rgba(75,108,183,0.05)',
          borderRadius: '10px',
          lineHeight: '1.7'
        }}>
          <p>Built custom web applications using WordPress, Laravel, and modern JavaScript frameworks for various client needs.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ 
        padding: '6rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: theme.accent,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>Let's Connect</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent, margin: '0 auto 1.5rem auto' }}></div>
        
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6',
          color: theme.textSecondary,
          marginBottom: '3.5rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3.5rem auto'
        }}>
          Ready to discuss your next project or explore collaboration opportunities? 
          I'm always interested in connecting with fellow professionals and potential clients.
        </p>

        <div className="contact-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            background: theme.card,
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            border: '1px solid ' + theme.cardBorder,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-8px)';
            e.target.style.boxShadow = isDarkMode 
              ? '0 20px 40px rgba(6,182,212,0.15)' 
              : '0 20px 40px rgba(2,132,199,0.12)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondaryAccent})`
            }}></div>
            <div style={{ 
              fontSize: '2.2rem', 
              color: theme.accent,
              marginBottom: '1.2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </div>
            <div style={{ 
              color: theme.textPrimary, 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              marginBottom: '0.8rem',
              textAlign: 'center'
            }}>
              Email Address
            </div>
            <a 
              href="mailto:nak.llantada@gmail.com" 
              style={{ 
                color: theme.accent, 
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = theme.secondaryAccent;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = theme.accent;
                e.target.style.transform = 'scale(1)';
              }}
            >
              nak.llantada@gmail.com
            </a>
          </div>
          
          <div style={{ 
            background: theme.card,
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            border: '1px solid ' + theme.cardBorder,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-8px)';
            e.target.style.boxShadow = isDarkMode 
              ? '0 20px 40px rgba(6,182,212,0.15)' 
              : '0 20px 40px rgba(2,132,199,0.12)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondaryAccent})`
            }}></div>
            <div style={{ 
              fontSize: '2.2rem', 
              color: theme.accent,
              marginBottom: '1.2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
              </svg>
            </div>
            <div style={{ 
              color: theme.textPrimary, 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              marginBottom: '0.8rem',
              textAlign: 'center'
            }}>
              Phone Number
            </div>
            <a 
              href="tel:+639613843081" 
              style={{ 
                color: theme.accent, 
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = theme.secondaryAccent;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = theme.accent;
                e.target.style.transform = 'scale(1)';
              }}
            >
              +63 961 384 3081
            </a>
          </div>
          
          <div style={{ 
            background: theme.card,
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            border: '1px solid ' + theme.cardBorder,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-8px)';
            e.target.style.boxShadow = isDarkMode 
              ? '0 20px 40px rgba(6,182,212,0.15)' 
              : '0 20px 40px rgba(2,132,199,0.12)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondaryAccent})`
            }}></div>
            <div style={{ 
              fontSize: '2.2rem', 
              color: theme.accent,
              marginBottom: '1.2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div style={{ 
              color: theme.textPrimary, 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              marginBottom: '0.8rem',
              textAlign: 'center'
            }}>
              LinkedIn
            </div>
            <a 
              href="https://www.linkedin.com/in/nak-llantada-b39b26b4/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: theme.accent, 
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = theme.secondaryAccent;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = theme.accent;
                e.target.style.transform = 'scale(1)';
              }}
            >
              Connect
            </a>
          </div>
          
          <div style={{ 
            background: theme.card,
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            border: '1px solid ' + theme.cardBorder,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-8px)';
            e.target.style.boxShadow = isDarkMode 
              ? '0 20px 40px rgba(6,182,212,0.15)' 
              : '0 20px 40px rgba(2,132,199,0.12)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondaryAccent})`
            }}></div>
            <div style={{ 
              fontSize: '2.2rem', 
              color: theme.accent,
              marginBottom: '1.2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div style={{ 
              color: theme.textPrimary, 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              marginBottom: '0.8rem',
              textAlign: 'center'
            }}>
              Location
            </div>
            <div style={{ 
              color: theme.textSecondary, 
              fontSize: '0.95rem',
              fontWeight: '500',
              textAlign: 'center',
              padding: '0.5rem 0'
            }}>
              Quezon City, Philippines
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: isDarkMode 
            ? `linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.1) 100%)` 
            : `linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(59,130,246,0.1) 100%)`,
          borderRadius: '20px',
          padding: '2.5rem',
          textAlign: 'center',
          border: '1px solid ' + (isDarkMode ? 'rgba(6,182,212,0.2)' : 'rgba(14,165,233,0.2)'),
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondaryAccent})`
          }}></div>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            color: theme.textPrimary,
            marginBottom: '1rem'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: theme.textSecondary,
            marginBottom: '1.5rem',
            maxWidth: '500px',
            margin: '0 auto 1.5rem auto'
          }}>
            Whether you need a complete web application, API integration, or cloud infrastructure setup, 
            I'm here to help bring your ideas to life.
          </p>
          <a 
            href="mailto:nak.llantada@gmail.com?subject=Project Inquiry"
            style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${theme.accent} 0%, ${isDarkMode ? '#0891b2' : '#0369a1'} 100%)`,
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.9rem 2.5rem',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Get In Touch Today
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ 
        padding: '5rem 2rem 3rem 2rem',
        textAlign: 'center',
        background: isDarkMode ? '#0a0a0a' : '#f8f9fa',
        color: theme.textSecondary,
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${theme.accent} 50%, transparent 100%)`
        }}></div>
        
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: theme.textSecondary,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = theme.textSecondary;
                }}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div style={{ 
            fontSize: '0.9rem',
            borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            paddingTop: '2rem',
            width: '100%',
            maxWidth: '500px'
          }}>
            © {new Date().getFullYear()} Nak Roque Llantada. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
