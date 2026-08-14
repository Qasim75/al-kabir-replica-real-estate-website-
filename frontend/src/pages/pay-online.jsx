import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const PayOnline = () => {
  useDocumentTitle('Pay Online');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    plotNumber: '',
    amount: '',
    paymentMethod: 'credit-card'
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
    if (formData.name && formData.email && formData.phone && formData.projectName && formData.plotNumber && formData.amount) {
      setLoading(true);
      setError(null);
      try {
        const response = await api.post('/payments', formData);
        if (response.data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', projectName: '', plotNumber: '', amount: '', paymentMethod: 'credit-card' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (err) {
        setError('Payment submission failed. Please try again.');
        console.error('Error submitting payment:', err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="pay-online-page">
      {/* Hero Section */}
      <section className="pay-hero" style={{
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
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px' }}>Pay Online</h1>
            <p style={{ fontSize: '18px', opacity: '0.9' }}>Secure and convenient payment options for Al-Kabir Developers</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pay-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Payment Form */}
            <Reveal direction="left" className="pay-form-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Make Payment</h2>

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
                  Payment request submitted successfully. You will be redirected to the payment gateway.
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
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Amount (PKR) *</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
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
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>Payment Method *</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
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
                    <option value="credit-card">Credit/Debit Card</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="easypaisa">EasyPaisa</option>
                    <option value="jazz-cash">Jazz Cash</option>
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
                    transition: 'background 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => !loading && (e.target.style.background = '#16a085')}
                  onMouseLeave={(e) => !loading && (e.target.style.background = '#1abc9c')}
                >
                  <FaLock /> {loading ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
                </motion.button>
              </form>
            </Reveal>

            {/* Information Section */}
            <Reveal direction="right" delay={0.1} className="pay-info-wrapper">
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Payment Information</h2>

              {/* Payment Methods */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Accepted Payment Methods</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#003366', fontWeight: '600' }}>Credit/Debit Card</p>
                    <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>Visa, MasterCard, American Express</p>
                  </div>
                  <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#003366', fontWeight: '600' }}>Bank Transfer</p>
                    <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>Direct bank transfer to Al-Kabir account</p>
                  </div>
                  <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#003366', fontWeight: '600' }}>Mobile Wallets</p>
                    <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>EasyPaisa, JazzCash</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayOnline;
