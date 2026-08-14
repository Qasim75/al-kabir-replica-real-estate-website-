import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const AdjustmentForms = () => {
  useDocumentTitle('Adjustment Forms Verification');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    plotNumber: '',
    formType: ''
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
    if (formData.name && formData.email && formData.phone && formData.projectName && formData.plotNumber && formData.formType) {
      setLoading(true);
      setError(null);
      try {
        const response = await api.post('/adjustment-forms', formData);
        if (response.data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', projectName: '', plotNumber: '', formType: '' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (err) {
        setError('Form submission failed. Please try again.');
        console.error('Error submitting adjustment form:', err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="adjustment-forms-page">
      {/* Hero Section */}
      <section className="adjustment-hero" style={{
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
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px' }}>Adjustment Forms Verification</h1>
            <p style={{ fontSize: '18px', opacity: '0.9' }}>Submit and verify your adjustment forms with Al-Kabir Developers</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="adjustment-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Form Section */}
            <Reveal direction="left" className="adjustment-form-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Submit Your Form</h2>

              {submitted && (
                <div style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '15px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                  border: '1px solid #c3e6cb'
                }}>
                  <FaCheckCircle style={{ marginRight: '10px' }} />
                  Your form has been submitted successfully. We'll process it shortly.
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
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Full Name *</label>
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
                      boxSizing: 'border-box'
                    }}
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
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Project Name *</label>
                  <select
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select a Project</option>
                    <option value="Al Kabir Town Phase I">Al Kabir Town Phase I</option>
                    <option value="Al Kabir Town Phase II">Al Kabir Town Phase II</option>
                    <option value="Al-Kabir Downtown">Al-Kabir Downtown</option>
                    <option value="Kings Town Phase I">Kings Town Phase I</option>
                    <option value="Kings Town Phase II">Kings Town Phase II</option>
                    <option value="Maryam Town">Maryam Town</option>
                    <option value="Al-Kabir Orchard">Al-Kabir Orchard</option>
                    <option value="Al-Kareem City">Al-Kareem City</option>
                    <option value="The Oasis Residence">The Oasis Residence</option>
                    <option value="Jumairah Park Villas">Jumairah Park Villas</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Plot Number *</label>
                  <input
                    type="text"
                    name="plotNumber"
                    value={formData.plotNumber}
                    onChange={handleChange}
                    placeholder="e.g., A-123"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Form Type *</label>
                  <select
                    name="formType"
                    value={formData.formType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select Form Type</option>
                    <option value="Adjustment Form">Adjustment Form</option>
                    <option value="Transfer Form">Transfer Form</option>
                    <option value="Inheritance Form">Inheritance Form</option>
                    <option value="Correction Form">Correction Form</option>
                  </select>
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
                  {loading ? 'SUBMITTING...' : 'SUBMIT FORM'}
                </motion.button>
              </form>
            </Reveal>

            {/* Information Section */}
            <Reveal direction="right" delay={0.1} className="adjustment-info-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Required Documents</h2>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>For Adjustment Form</h3>
                <ul style={{ paddingLeft: '20px', color: '#555' }}>
                  <li style={{ marginBottom: '8px' }}>Original Allotment Letter</li>
                  <li style={{ marginBottom: '8px' }}>CNIC (Copy)</li>
                  <li style={{ marginBottom: '8px' }}>Bank Deposit Slip</li>
                  <li style={{ marginBottom: '8px' }}>Affidavit (if applicable)</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>For Transfer Form</h3>
                <ul style={{ paddingLeft: '20px', color: '#555' }}>
                  <li style={{ marginBottom: '8px' }}>Original Allotment Letter</li>
                  <li style={{ marginBottom: '8px' }}>CNIC (Buyer & Seller)</li>
                  <li style={{ marginBottom: '8px' }}>Sale Agreement</li>
                  <li style={{ marginBottom: '8px' }}>Affidavit</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdjustmentForms;
