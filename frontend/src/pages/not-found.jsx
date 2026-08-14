import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import useDocumentTitle from '../utils/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Page Not Found');

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl text-center space-y-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-emerald-400 font-bold tracking-[0.3em] text-sm uppercase"
        >
          Al Kabir Developers
        </motion.p>

        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.15 }}
          className="text-7xl sm:text-8xl font-black text-white/90"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            4
          </motion.span>
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-emerald-400"
          >
            0
          </motion.span>
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="inline-block"
          >
            4
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold"
        >
          This page couldn't be found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-300 leading-relaxed"
        >
          The page you're looking for may have been moved, renamed, or doesn't exist.
          Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-full transition-colors duration-300"
            >
              <FaHome /> Back to Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-emerald-400 hover:text-emerald-400 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300"
            >
              <FaPhoneAlt /> Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
