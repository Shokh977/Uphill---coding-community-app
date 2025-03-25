import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick, className, type = "button", disabled = false }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const defaultClasses = "relative py-2 px-6 rounded-lg font-medium overflow-hidden transition-colors";
  const buttonClasses = className || `${defaultClasses} bg-violet-600 text-white hover:bg-violet-700`;
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      
      {/* Animated background effect */}
      <motion.span
        className="absolute inset-0 bg-white rounded-lg opacity-10"
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        animate={isHovered ? { scale: 3 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
        style={{ originX: 0.5, originY: 0.5, left: '50%', top: '50%' }}
      />
    </motion.button>
  );
}
