import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneVolume, FaCheckCircle } from 'react-icons/fa';
import api from '../utils/api';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Callback = () => {
  useDocumentTitle('Request a Callback');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    projectName: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please fill in your name and phone number.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/callback', formData);
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', preferredTime: '', projectName: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Error submitting callback request:', err);
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
          <motion.div animate={{ rotate: [0, -15, 15, -10, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
            <FaPhoneVolume className="mx-auto text-emerald-400 text-4xl mb-4" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Request a Callback</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Leave your details and one of our property consultants will call you back shortly.
          </p>
        </Reveal>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <Reveal className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 sm:p-10">
          {submitted && (
            <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg">
              <FaCheckCircle /> Thanks! We'll call you back soon.
            </div>
          )}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03xx-xxxxxxx"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Project of Interest</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="e.g. Al Kabir Town Phase 2"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time to Call</label>
              <input
                type="text"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                placeholder="e.g. Weekdays after 4 PM"
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
              {loading ? 'Submitting...' : 'Request Callback'}
            </motion.button>
          </form>
        </Reveal>
      </section>
    </div>
  );
};

export default Callback;
