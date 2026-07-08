// src/components/animations/FadeIn.jsx
import { motion } from 'framer-motion';

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = '',
  once = true,
  ...props
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once, margin: '-80px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
