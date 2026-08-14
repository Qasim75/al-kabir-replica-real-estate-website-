import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../utils/useTheme';

/**
 * Animated pill-style toggle switch. Reused in the navbar (desktop + mobile)
 * and the admin sidebar so it's reachable from literally every page.
 */
const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center w-14 h-8 rounded-full px-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
        isDark ? 'bg-slate-700' : 'bg-amber-200'
      } ${className}`}
    >
      <motion.span
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md"
      >
        {isDark ? (
          <FaMoon className="text-slate-700 text-xs" />
        ) : (
          <FaSun className="text-amber-500 text-xs" />
        )}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
