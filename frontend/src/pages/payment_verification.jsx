import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCheckCircle, FaFileAlt, FaFilePdf, FaTimesCircle } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const Verification = () => {
  useDocumentTitle('Payment Verification');
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  // Search Functionality
  const handleSearch = async () => {
    if(searchTerm.trim() !== "") {
      setLoading(true);
      setError(null);
      setShowResult(false);
      try {
        const response = await api.get(`/verify/${searchTerm}`);
        if (response.data.success) {
          setResultData(response.data.data);
          setShowResult(true);
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("No record found for this Registration Number.");
        } else {
          setError("An error occurred while verifying. Please try again.");
        }
        console.error('Error verifying registration:', err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a Form or Registration Number");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="inner-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #065f46 100%) center/cover', padding: '100px 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h1 style={{fontSize: '40px', fontWeight: '800'}}>ONLINE VERIFICATION</h1>
            <p style={{fontSize: '18px', opacity: '0.8'}}>Verify your property documents with Al-Kabir Developers</p>
          </motion.div>
        </div>
      </section>

      {/* Search Input Section */}
      <section className="verification-search" style={{marginTop: '-60px', paddingBottom: '50px'}}>
        <div className="container">
          <Reveal delay={0.1} className="search-box-wrapper" style={{background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center'}}>
            <h2 style={{color: '#003366', marginBottom: '20px'}}>Track Your Application</h2>
            <div className="search-input-group" style={{display: 'flex', gap: '10px', maxWidth: '700px', margin: '0 auto'}}>
              <input 
                type="text" 
                placeholder="Enter Form No (e.g. AKD-12345)..." 
                style={{flex: '1', padding: '15px', border: '1px solid #ddd', borderRadius: '5px'}}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleSearch}
                disabled={loading}
                style={{background: '#003366', color: 'white', padding: '0 30px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold'}}
              >
                {loading ? 'VERIFYING...' : <><FaSearch /> VERIFY NOW</>}
              </motion.button>
            </div>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  style={{color: '#e74c3c', marginTop: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}
                >
                  <FaTimesCircle /> {error}
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* Results Section */}
      <AnimatePresence>
      {showResult && resultData && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="container"
          style={{padding: '20px 0 60px'}}
        >
          <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '8px', border: '1px solid #003366', textAlign: 'center'}}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.15 }}>
              <FaCheckCircle style={{fontSize: '50px', color: '#27ae60', marginBottom: '15px'}} />
            </motion.div>
            <h3>Verification Record Found!</h3>
            <div style={{textAlign: 'left', maxWidth: '400px', margin: '20px auto', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
              <p><strong>Registration No:</strong> {resultData.registrationNumber}</p>
              <p><strong>Owner Name:</strong> {resultData.ownerName}</p>
              <p><strong>Project:</strong> {resultData.projectName}</p>
              <p><strong>Plot Size:</strong> {resultData.plotSize}</p>
              <p><strong>Status:</strong> <span style={{color: '#27ae60', fontWeight: 'bold'}}>{resultData.status}</span></p>
            </div>
            
            {/* Download PDF Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resultData.pdfUrl || "/assets/pdf/Verification_Report.pdf"}
              download="Verification_Report.pdf"
              style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#e74c3c', color: 'white', padding: '12px 25px', borderRadius: '5px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold'}}
            >
              <FaFilePdf /> DOWNLOAD VERIFICATION PDF
            </motion.a>
          </div>
        </motion.section>
      )}
      </AnimatePresence>

      {/* Info Cards Section */}
      <section className="verification-info container" style={{padding: '40px 0 80px'}}>
        <StaggerContainer className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}} stagger={0.12}>
          <StaggerItem whileHover={{ y: -6 }} className="info-card" style={{padding: '30px', textAlign: 'center', border: '1px solid #eee', borderRadius: '10px'}}>
            <div className="icon-circle" style={{fontSize: '30px', color: '#003366'}}><FaCheckCircle /></div>
            <h3>Verified Status</h3>
            <p>Get instant confirmation of your file's legal status.</p>
          </StaggerItem>
          <StaggerItem whileHover={{ y: -6 }} className="info-card" style={{padding: '30px', textAlign: 'center', border: '1px solid #eee', borderRadius: '10px'}}>
            <div className="icon-circle" style={{fontSize: '30px', color: '#003366'}}><FaFileAlt /></div>
            <h3>PDF Reports</h3>
            <p>Download your official verification performa in PDF format.</p>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </>
  );
};

export default Verification;
