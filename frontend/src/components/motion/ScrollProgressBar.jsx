import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// A thin emerald progress bar pinned to the very top of the viewport
// that fills as the user scrolls down the current page.
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 z-[60]"
    />
  );
};

export default ScrollProgressBar;
