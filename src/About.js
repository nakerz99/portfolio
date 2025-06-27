import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '15px',
        marginBottom: '4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: '700', marginBottom: '1rem' }}>About TechSolutions</h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            We build innovative solutions for businesses that want to lead in the digital era
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem' }}>Our Story</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1rem' }}>
              Founded in 2010, TechSolutions began with a simple mission: to make technology accessible and useful for businesses of all sizes.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1rem' }}>
              What started as a small team of three passionate developers has grown into a full-service digital solutions provider with offices in three countries and a team of over 30 experts.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              Over the years, we've helped hundreds of businesses transform their digital presence, streamline their operations, and connect with their customers in meaningful ways.
            </p>
          </div>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.07)'
          }}>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#4b6cb7' }}>2010</div>
                <div>Founded in San Francisco</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#4b6cb7' }}>2015</div>
                <div>Expanded to New York & London</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#4b6cb7' }}>2018</div>
                <div>Launched Enterprise Solutions Division</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', color: '#4b6cb7' }}>2023</div>
                <div>Named Top Tech Innovator</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', textAlign: 'center' }}>Our Leadership Team</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Team Member 1 */}
          <div style={{ 
            background: '#fff', 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#4b6cb7', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}>JD</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginTop: '0', marginBottom: '0.5rem' }}>John Doe</h3>
              <p style={{ color: '#4b6cb7', fontSize: '1rem', marginTop: '0', marginBottom: '1rem' }}>CEO & Founder</p>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                John brings over 20 years of experience in software development and business leadership.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div style={{ 
            background: '#fff', 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#764ba2', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}>JS</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginTop: '0', marginBottom: '0.5rem' }}>Jane Smith</h3>
              <p style={{ color: '#764ba2', fontSize: '1rem', marginTop: '0', marginBottom: '1rem' }}>CTO</p>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Jane leads our technical strategy and oversees all development operations.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div style={{ 
            background: '#fff', 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#4b6cb7', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}>RB</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginTop: '0', marginBottom: '0.5rem' }}>Robert Brown</h3>
              <p style={{ color: '#4b6cb7', fontSize: '1rem', marginTop: '0', marginBottom: '1rem' }}>COO</p>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Robert ensures our operations run smoothly and our clients receive exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
        padding: '3rem 2rem',
        borderRadius: '12px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginTop: '0', marginBottom: '1rem' }}>Ready to Work With Us?</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem auto', opacity: '0.9' }}>
          We're always looking for new challenges and exciting projects. Let's discuss how we can help your business grow.
        </p>
        <button style={{
          background: '#ffffff',
          color: '#4b6cb7',
          border: 'none',
          padding: '1rem 2.5rem',
          borderRadius: '30px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>Get in Touch</button>
      </div>
    </div>
  );
}

export default About;
