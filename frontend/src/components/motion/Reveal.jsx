import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps any content so it fades/slides into view the moment it scrolls
 * into the viewport, then never re-animates (once: true) so scrolling
 * back and forth doesn't feel jumpy.
 *
 * Usage:  <Reveal><h2>Title</h2></Reveal>
 *         <Reveal direction="left" delay={0.1}>...</Reveal>
 */
const DIRECTIONS = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  style,
  as = 'div',
  once = true,
  amount = 0.2,
}) => {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
