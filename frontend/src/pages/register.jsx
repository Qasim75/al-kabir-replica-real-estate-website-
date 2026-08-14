import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCheckCircle } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Register = () => {
  useDocumentTitle('Register for News');

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError('Please enter your email address.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/newsletter', formData);
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Error subscribing to newsletter:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero */}
      <section
        className="text-white text-center py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #065f46 100%)' }}
      >
        <Reveal>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaBell className="mx-auto text-emerald-400 text-4xl mb-4" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Register for News</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Stay updated on new project launches, payment plan updates, and exclusive offers from Al Kabir Developers.
          </p>
        </Reveal>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <Reveal className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 sm:p-10">
          {submitted && (
            <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg">
              <FaCheckCircle /> You're subscribed! We'll keep you posted.
            </div>
          )}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name (optional)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-bold py-3 rounded-lg transition-colors duration-300"
            >
              {loading ? 'Submitting...' : 'Subscribe'}
            </motion.button>
            <p className="text-xs text-slate-400 text-center">
              We respect your privacy. Read our{' '}
              <a href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  );
};

export default Register;
