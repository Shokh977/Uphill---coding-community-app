import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.6,
    }
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.4,
    }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition-container"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;