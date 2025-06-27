import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Home() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Nak Llantada</h1>
          <h2>Web Developer & Designer</h2>
          <p>I build beautiful, functional websites and applications with a focus on user experience.</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="primary-button">View My Work</Link>
            <Link to="/contact" className="secondary-button">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            {/* Profile image placeholder */}
            <span>NK</span>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-item">
              <div className="skill-name">React</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">HTML/CSS</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-item">
              <div className="skill-name">Node.js</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Express</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">MongoDB</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-item">
              <div className="skill-name">Git</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Figma</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">VS Code</div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image project-1"></div>
            <div className="project-info">
              <h3>E-commerce Platform</h3>
              <p>A full-featured online store with payment processing, user authentication, and inventory management.</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <Link to="/portfolio/ecommerce" className="view-project">View Project</Link>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image project-2"></div>
            <div className="project-info">
              <h3>Task Management App</h3>
              <p>A responsive task manager with drag-and-drop functionality, team collaboration, and progress tracking.</p>
              <div className="project-tags">
                <span>React</span>
                <span>Firebase</span>
                <span>Material UI</span>
              </div>
              <Link to="/portfolio/taskmanager" className="view-project">View Project</Link>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image project-3"></div>
            <div className="project-info">
              <h3>Portfolio Website</h3>
              <p>A custom portfolio site built with React, featuring smooth animations and responsive design.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>Framer Motion</span>
              </div>
              <Link to="/portfolio/portfolio" className="view-project">View Project</Link>
            </div>
          </div>
        </div>
        
        <div className="view-all-container">
          <Link to="/portfolio" className="view-all">View All Projects</Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What People Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="quote">"Nak delivered our project on time and exceeded our expectations. The website not only looks great but has significantly improved our conversion rates."</div>
            <div className="author">
              <div className="author-info">
                <div className="author-name">Alex Johnson</div>
                <div className="author-title">Marketing Director, TechCorp</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="quote">"Working with Nak was a pleasure. They understood our vision perfectly and translated it into a beautiful, functional website that our customers love."</div>
            <div className="author">
              <div className="author-info">
                <div className="author-name">Sarah Williams</div>
                <div className="author-title">CEO, Design Studio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? I'd love to help you bring your ideas to life.</p>
        <Link to="/contact" className="primary-button">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Home;
