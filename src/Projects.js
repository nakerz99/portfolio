import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Projects() {
  return (
    <div className="portfolio-container">
      {/* Projects Hero */}
      <section className="page-header">
        <h1>My Projects</h1>
        <p>A selection of my recent work and personal projects</p>
      </section>
      
      {/* Project Filters */}
      <section className="filter-section">
        <div className="filter-container">
          <button className="filter-button active">All</button>
          <button className="filter-button">Web Development</button>
          <button className="filter-button">Mobile Apps</button>
          <button className="filter-button">UI/UX Design</button>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="projects-full-grid">
        {/* Project 1 */}
        <div className="project-full-card">
          <div className="project-image project-1"></div>
          <div className="project-full-info">
            <h3>E-commerce Platform</h3>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Redux</span>
            </div>
            <p>
              A comprehensive e-commerce solution with product management, shopping cart functionality,
              secure payment processing, and order management. The platform includes an admin dashboard
              for inventory management and sales analytics.
            </p>
            <div className="project-links">
              <Link to="/portfolio/ecommerce" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="project-full-card">
          <div className="project-image project-2"></div>
          <div className="project-full-info">
            <h3>Task Management App</h3>
            <div className="project-tags">
              <span>React</span>
              <span>Firebase</span>
              <span>Material UI</span>
              <span>Context API</span>
            </div>
            <p>
              A collaborative task management application with real-time updates, drag-and-drop task organization,
              and team member assignment. Features include deadline tracking, priority levels, and customizable 
              project views.
            </p>
            <div className="project-links">
              <Link to="/portfolio/taskmanager" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="project-full-card">
          <div className="project-image project-3"></div>
          <div className="project-full-info">
            <h3>Portfolio Website</h3>
            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>Framer Motion</span>
              <span>Responsive Design</span>
            </div>
            <p>
              A modern, responsive portfolio website with smooth animations and transitions.
              Features include a dark/light mode toggle, filterable project gallery, and contact form
              with validation.
            </p>
            <div className="project-links">
              <Link to="/portfolio/portfolio" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Project 4 */}
        <div className="project-full-card">
          <div className="project-image project-4"></div>
          <div className="project-full-info">
            <h3>Weather Dashboard</h3>
            <div className="project-tags">
              <span>JavaScript</span>
              <span>Weather API</span>
              <span>Chart.js</span>
              <span>Geolocation</span>
            </div>
            <p>
              An interactive weather application providing current conditions, hourly forecasts,
              and 7-day predictions. Includes interactive charts for temperature and precipitation,
              plus severe weather alerts.
            </p>
            <div className="project-links">
              <Link to="/portfolio/weather" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Project 5 */}
        <div className="project-full-card">
          <div className="project-image project-5"></div>
          <div className="project-full-info">
            <h3>Recipe Finder App</h3>
            <div className="project-tags">
              <span>React Native</span>
              <span>Firebase</span>
              <span>Recipe API</span>
              <span>Authentication</span>
            </div>
            <p>
              A cross-platform mobile application that helps users find recipes based on ingredients they have.
              Features include saved favorites, dietary filters, and step-by-step cooking instructions.
            </p>
            <div className="project-links">
              <Link to="/portfolio/recipe" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Project 6 */}
        <div className="project-full-card">
          <div className="project-image project-6"></div>
          <div className="project-full-info">
            <h3>Fitness Tracker</h3>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Chart.js</span>
            </div>
            <p>
              A comprehensive fitness tracking application that allows users to log workouts,
              track progress, and set goals. Features include visual progress charts, workout plans,
              and achievement badges.
            </p>
            <div className="project-links">
              <Link to="/portfolio/fitness" className="view-details-button">View Details</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              <a href="https://demo-site.com" target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <Link to="/contact" className="primary-button">Get In Touch</Link>
      </section>
    </div>
  );
}

export default Projects;
