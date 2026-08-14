import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Contact = () => {
  useDocumentTitle('Contact Us');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      setError(null);
      try {
        const response = await api.post('/contact', formData);
        if (response.data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (err) {
        setError('Failed to send message. Please try again later.');
        console.error('Error submitting contact form:', err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #065f46 100%) center/cover',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px' }}>Contact Us</h1>
            <p style={{ fontSize: '18px', opacity: '0.9' }}>Get in touch with Al-Kabir Developers</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Contact Form */}
            <Reveal direction="left" className="contact-form-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Get In Touch</h2>
              
              {submitted && (
                <div style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '15px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                  border: '1px solid #c3e6cb'
                }}>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {error && (
                <div style={{
                  background: '#f8d7da',
                  color: '#721c24',
                  padding: '15px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                  border: '1px solid #f5c6cb'
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#003366'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#003366'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="6"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#003366'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? '#95a5a6' : '#1abc9c',
                    color: 'white',
                    padding: '14px 40px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => !loading && (e.target.style.background = '#16a085')}
                  onMouseLeave={(e) => !loading && (e.target.style.background = '#1abc9c')}
                >
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            </Reveal>

            {/* Contact Information */}
            <Reveal direction="right" delay={0.1} className="contact-info-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Contact Information</h2>

              {/* Head Office */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Head Office</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
                  <FaMapMarkerAlt style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Al-Kabir Town Phase I Near BNU, 1KM off Adda Plot, Raiwind Road, Lahore</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
                  <FaPhone style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: '0 0 5px 0', color: '#555' }}><a href="tel:080011339" style={{ color: '#003366', textDecoration: 'none' }}>0800-11339 (Toll Free)</a></p>
                    <p style={{ margin: '0 0 5px 0', color: '#555' }}><a href="tel:+924211111339" style={{ color: '#003366', textDecoration: 'none' }}>+92 42 111 111 339 (UAN)</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <FaEnvelope style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555' }}><a href="mailto:info@alkabirdeveloper.com" style={{ color: '#003366', textDecoration: 'none' }}>info@alkabirdeveloper.com</a></p>
                </div>
              </div>

              {/* Al-Kabir Tower */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Al-Kabir Tower</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
                  <FaMapMarkerAlt style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>#11 commercial Alkabir Tower Tipu Block Garden Town, Lahore</p>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <FaPhone style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555' }}><a href="tel:080011339" style={{ color: '#003366', textDecoration: 'none' }}>0800-11339 (Toll Free)</a></p>
                </div>
              </div>

              {/* DHA Office */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>DHA Office</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
                  <FaMapMarkerAlt style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>1st floor, 58 MB, Sector H DHA Phase 6, Lahore</p>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <FaPhone style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555' }}><a href="tel:080011339" style={{ color: '#003366', textDecoration: 'none' }}>0800-11339 (Toll Free)</a></p>
                </div>
              </div>

              {/* Dubai Office */}
              <div style={{ marginBottom: '30px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Dubai Office</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
                  <FaMapMarkerAlt style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Office 302 Ontario Tower Business Bay, Dubai, UAE</p>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <FaPhone style={{ color: '#1abc9c', fontSize: '20px', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#555' }}><a href="tel:+971569046003" style={{ color: '#003366', textDecoration: 'none' }}>+971 56 904 6003</a></p>
                </div>
              </div>

              {/* Business Hours */}
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '5px', marginTop: '30px' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Business Hours</h3>
                <p style={{ margin: '0 0 5px 0', color: '#555' }}>Monday to Saturday: 9:00 AM - 5:00 PM</p>
                <p style={{ margin: 0, color: '#555' }}>Sunday: Closed</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '40px', fontSize: '32px', fontWeight: '700' }}>Find Us On Map</h2>
          <Reveal style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7589638298936!2d74.2833!3d31.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a8f1b8b8b8b9%3A0x1b8b8b8b8b8b8b8b!2sAl-Kabir%20Town%20Phase%201!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al-Kabir Developers Location"
            ></iframe>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
