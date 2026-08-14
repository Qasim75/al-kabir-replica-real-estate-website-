import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaQuestionCircle } from 'react-icons/fa';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const PaymentGuide = () => {
  useDocumentTitle('Payment Guide');
  return (
    <div className="payment-guide-page">
      {/* Hero Section */}
      <section className="guide-hero" style={{
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
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px' }}>Payment Guide</h1>
            <p style={{ fontSize: '18px', opacity: '0.9' }}>Complete information about payment plans and procedures</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="guide-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* Download Section */}
          <Reveal style={{ background: '#e8f4f8', padding: '40px', borderRadius: '10px', marginBottom: '60px' }}>
            <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '28px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <FaDownload /> Download Payment Guide
            </h2>
            <p style={{ color: '#555', marginBottom: '20px', fontSize: '16px' }}>Download the complete payment guide document for detailed information about payment plans, schedules, and procedures.</p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/assets/pdf/Payment-Guide.pdf"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1abc9c',
                color: 'white',
                padding: '14px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#16a085'}
              onMouseLeave={(e) => e.target.style.background = '#1abc9c'}
            >
              <FaDownload /> Download PDF
            </motion.a>
          </Reveal>

          {/* Payment Plans Section */}
          <div style={{ marginBottom: '60px' }}>
            <Reveal><h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Payment Plans</h2></Reveal>
            <StaggerContainer className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }} stagger={0.1}>
              {/* Plan 1 */}
              <StaggerItem whileHover={{ y: -6 }} style={{ background: 'white', padding: '30px', borderRadius: '10px', border: '2px solid #1abc9c', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '20px', fontWeight: '700' }}>Standard Plan</h3>
                <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Down Payment: <strong>20%</strong></p>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Installments: <strong>36 months</strong></p>
                  <p style={{ margin: 0, color: '#555' }}>Markup: <strong>0%</strong></p>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#555', margin: '0 0 15px 0' }}>
                  <li style={{ marginBottom: '8px' }}>Flexible payment schedule</li>
                  <li style={{ marginBottom: '8px' }}>No hidden charges</li>
                  <li>Early payment discount available</li>
                </ul>
              </StaggerItem>

              {/* Plan 2 */}
              <StaggerItem whileHover={{ y: -6 }} style={{ background: 'white', padding: '30px', borderRadius: '10px', border: '2px solid #1abc9c', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '20px', fontWeight: '700' }}>Premium Plan</h3>
                <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Down Payment: <strong>30%</strong></p>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Installments: <strong>24 months</strong></p>
                  <p style={{ margin: 0, color: '#555' }}>Markup: <strong>0%</strong></p>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#555', margin: '0 0 15px 0' }}>
                  <li style={{ marginBottom: '8px' }}>Shorter payment period</li>
                  <li style={{ marginBottom: '8px' }}>Priority allocation</li>
                  <li>Special discounts available</li>
                </ul>
              </StaggerItem>

              {/* Plan 3 */}
              <StaggerItem whileHover={{ y: -6 }} style={{ background: 'white', padding: '30px', borderRadius: '10px', border: '2px solid #1abc9c', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#003366', marginBottom: '15px', fontSize: '20px', fontWeight: '700' }}>Express Plan</h3>
                <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Down Payment: <strong>50%</strong></p>
                  <p style={{ margin: '0 0 8px 0', color: '#555' }}>Installments: <strong>12 months</strong></p>
                  <p style={{ margin: 0, color: '#555' }}>Markup: <strong>0%</strong></p>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#555', margin: '0 0 15px 0' }}>
                  <li style={{ marginBottom: '8px' }}>Fastest completion</li>
                  <li style={{ marginBottom: '8px' }}>Maximum discount</li>
                  <li>Immediate possession eligible</li>
                </ul>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Payment Schedule Section */}
          <div style={{ marginBottom: '60px' }}>
            <Reveal><h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Payment Schedule</h2></Reveal>
            <Reveal delay={0.1} style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'white',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ background: '#003366', color: 'white' }}>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '700' }}>Phase</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '700' }}>Percentage</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '700' }}>Timeline</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '700' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', color: '#555' }}>Booking</td>
                    <td style={{ padding: '15px', color: '#555' }}>20-50%</td>
                    <td style={{ padding: '15px', color: '#555' }}>On Booking</td>
                    <td style={{ padding: '15px', color: '#555' }}>Secure your plot immediately</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', color: '#555' }}>Installments</td>
                    <td style={{ padding: '15px', color: '#555' }}>Remaining</td>
                    <td style={{ padding: '15px', color: '#555' }}>12-36 months</td>
                    <td style={{ padding: '15px', color: '#555' }}>Monthly or quarterly payments</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '15px', color: '#555' }}>Possession</td>
                    <td style={{ padding: '15px', color: '#555' }}>100%</td>
                    <td style={{ padding: '15px', color: '#555' }}>On Full Payment</td>
                    <td style={{ padding: '15px', color: '#555' }}>Receive possession documents</td>
                  </tr>
                </tbody>
              </table>
            </Reveal>
          </div>

          {/* Payment Methods Section */}
          <div style={{ marginBottom: '60px' }}>
            <Reveal><h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700' }}>Payment Methods</h2></Reveal>
            <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }} stagger={0.05}>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Bank Deposit</h3>
                <p style={{ color: '#555', margin: 0 }}>Direct deposit to Al-Kabir Developers bank account with reference number.</p>
              </StaggerItem>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Credit/Debit Card</h3>
                <p style={{ color: '#555', margin: 0 }}>Secure online payment through our payment gateway.</p>
              </StaggerItem>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Mobile Wallets</h3>
                <p style={{ color: '#555', margin: 0 }}>EasyPaisa, Jazz Cash, and other mobile payment options.</p>
              </StaggerItem>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Cheque</h3>
                <p style={{ color: '#555', margin: 0 }}>Post-dated cheques accepted with proper documentation.</p>
              </StaggerItem>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Bank Draft</h3>
                <p style={{ color: '#555', margin: 0 }}>Bank drafts in favor of Al-Kabir Developers.</p>
              </StaggerItem>
              <StaggerItem whileHover={{ y: -4 }} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px', borderLeft: '4px solid #1abc9c' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Cash</h3>
                <p style={{ color: '#555', margin: 0 }}>Direct cash payment at our office with receipt.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* FAQ Section */}
          <div style={{ marginBottom: '60px' }}>
            <Reveal>
              <h2 style={{ color: '#003366', marginBottom: '30px', fontSize: '32px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaQuestionCircle /> Frequently Asked Questions
              </h2>
            </Reveal>
            <StaggerContainer style={{ display: 'grid', gap: '20px' }} stagger={0.08}>
              <StaggerItem style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>What is the minimum down payment?</h3>
                <p style={{ color: '#555', margin: 0 }}>The minimum down payment is 20% of the total plot price. However, different payment plans offer varying down payment options.</p>
              </StaggerItem>
              <StaggerItem style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Can I change my payment plan?</h3>
                <p style={{ color: '#555', margin: 0 }}>Yes, you can change your payment plan with proper documentation and approval from our management team.</p>
              </StaggerItem>
              <StaggerItem style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Is there a discount for early payment?</h3>
                <p style={{ color: '#555', margin: 0 }}>Yes, we offer discounts for early payment. Contact our sales team for specific discount details.</p>
              </StaggerItem>
              <StaggerItem style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                <h3 style={{ color: '#003366', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>What happens if I miss a payment?</h3>
                <p style={{ color: '#555', margin: 0 }}>Late payments may incur additional charges. We recommend contacting us immediately if you anticipate a delay.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Contact Section */}
          <Reveal style={{ background: '#e8f4f8', padding: '40px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ color: '#003366', marginBottom: '15px', fontSize: '24px', fontWeight: '700' }}>Need More Information?</h2>
            <p style={{ color: '#555', marginBottom: '20px', fontSize: '16px' }}>Contact our payment and finance team for detailed information about payment plans and options.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <p style={{ color: '#003366', fontWeight: '700', marginBottom: '5px' }}>Phone</p>
                <p style={{ color: '#555', margin: 0 }}><a href="tel:080011339" style={{ color: '#003366', textDecoration: 'none' }}>0800-11339 (Toll Free)</a></p>
              </div>
              <div>
                <p style={{ color: '#003366', fontWeight: '700', marginBottom: '5px' }}>Email</p>
                <p style={{ color: '#555', margin: 0 }}><a href="mailto:info@alkabirdeveloper.com" style={{ color: '#003366', textDecoration: 'none' }}>info@alkabirdeveloper.com</a></p>
              </div>
              <div>
                <p style={{ color: '#003366', fontWeight: '700', marginBottom: '5px' }}>Office Hours</p>
                <p style={{ color: '#555', margin: 0 }}>Mon-Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PaymentGuide;
