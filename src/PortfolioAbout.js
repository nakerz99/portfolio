import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function About() {
  return (
    <div className="portfolio-container">
      {/* About Hero */}
      <section className="about-hero">
        <h1>About Me</h1>
        <div className="about-intro">
          <div className="about-image">
            <div className="profile-placeholder large">
              <span>NK</span>
            </div>
          </div>
          <div className="about-content">
            <h2>Hi, I'm Nak Llantada</h2>
            <p>
              I'm a passionate web developer and designer with over 5 years of experience creating 
              beautiful, functional websites and applications. My journey in tech began when I built 
              my first website at the age of 16, and I've been hooked ever since.
            </p>
            <p>
              I specialize in front-end development with React, but I'm also comfortable working across 
              the full stack. I believe in writing clean, maintainable code and creating intuitive user 
              experiences that solve real problems.
            </p>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="experience-section">
        <h2>My Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Senior Web Developer</h3>
              <h4>TechInnovate Solutions</h4>
              <p>
                Lead developer for client projects, managing a team of three junior developers.
                Implemented modern front-end architectures using React and Next.js, improving performance metrics by 40%.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Team Leadership</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021 - 2023</div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <h4>WebCraft Agency</h4>
              <p>
                Developed and maintained e-commerce websites and applications for clients across various industries.
                Implemented responsive designs and improved site performance.
              </p>
              <div className="tags">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Junior Web Developer</h3>
              <h4>Digital Creations Ltd</h4>
              <p>
                Built and maintained websites for small to medium-sized businesses.
                Collaborated with designers to implement UI/UX improvements.
              </p>
              <div className="tags">
                <span>HTML/CSS</span>
                <span>jQuery</span>
                <span>WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-year">2019</div>
            <h3>BSc Computer Science</h3>
            <p>University of Technology</p>
            <div className="education-details">
              <p>Graduated with honors, specializing in web technologies and software development.</p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="education-year">2020</div>
            <h3>Advanced React Certification</h3>
            <p>Frontend Masters</p>
            <div className="education-details">
              <p>Comprehensive training on advanced React patterns, hooks, and state management.</p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="education-year">2022</div>
            <h3>UX Design Fundamentals</h3>
            <p>Design Academy</p>
            <div className="education-details">
              <p>Learned principles of user-centered design and prototyping techniques.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Interests */}
      <section className="interests-section">
        <h2>Personal Interests</h2>
        <div className="interests-container">
          <div className="interest-item">
            <div className="interest-icon">🌐</div>
            <h3>Open Source</h3>
            <p>Contributing to React libraries and developer tools.</p>
          </div>
          <div className="interest-item">
            <div className="interest-icon">🎨</div>
            <h3>Digital Art</h3>
            <p>Creating illustrations and exploring generative art with code.</p>
          </div>
          <div className="interest-item">
            <div className="interest-icon">🏞️</div>
            <h3>Hiking</h3>
            <p>Exploring nature trails and mountains on weekends.</p>
          </div>
          <div className="interest-item">
            <div className="interest-icon">📚</div>
            <h3>Reading</h3>
            <p>Science fiction and technical books on new technologies.</p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Want to Work Together?</h2>
        <p>I'm currently available for freelance projects and open to full-time opportunities.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-button">Contact Me</Link>
          <a href="/resume.pdf" download className="secondary-button">Download CV</a>
        </div>
      </section>
    </div>
  );
}

export default About;
