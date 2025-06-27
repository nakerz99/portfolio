import React from 'react';
import './Portfolio.css';

function Contact() {
  return (
    <div className="portfolio-container">
      {/* Contact Hero */}
      <section className="page-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you!</p>
      </section>
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out through any of these channels.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:nak@example.com">nak@example.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+11234567890">+1 (123) 456-7890</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🔗</div>
                <div className="contact-details">
                  <h3>Social</h3>
                  <div className="social-links">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="availability">
              <h3>Current Availability</h3>
              <p>I'm currently available for freelance work and open to discussing full-time opportunities.</p>
              <div className="status-indicator available">
                <span className="status-dot"></span>
                <span>Available for Work</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email address" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="What is this regarding?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message" required></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>What types of projects do you work on?</h3>
            <p>I specialize in web applications, responsive websites, and e-commerce platforms. I have experience with both small business sites and larger enterprise applications.</p>
          </div>
          
          <div className="faq-item">
            <h3>What is your typical timeline for projects?</h3>
            <p>Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a more complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do you provide ongoing support after project completion?</h3>
            <p>Yes, I offer maintenance packages and ongoing support for all completed projects. This includes bug fixes, content updates, and performance monitoring.</p>
          </div>
          
          <div className="faq-item">
            <h3>What is your payment structure?</h3>
            <p>Typically, I require a 30% deposit to begin work, with the remainder due upon completion. For larger projects, I may set up milestone payments. I accept bank transfers and major credit cards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
