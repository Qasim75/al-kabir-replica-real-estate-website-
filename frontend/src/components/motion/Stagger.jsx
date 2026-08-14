import React from 'react';
import { motion } from 'framer-motion';

// Parent: wraps a grid/list. Children (StaggerItem) animate in one-by-one.
export const StaggerContainer = ({ children, className = '', stagger = 0.08, once = true, amount = 0.15 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', y = 24, ...rest }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
    {...rest}
  >
    {children}
  </motion.div>
);
