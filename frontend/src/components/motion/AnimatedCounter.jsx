import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/**
 * Counts up from 0 to `value` once it scrolls into view.
 * Usage: <AnimatedCounter value={25} suffix="+" /> -> "0" -> ... -> "25+"
 */
const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 1.6, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
