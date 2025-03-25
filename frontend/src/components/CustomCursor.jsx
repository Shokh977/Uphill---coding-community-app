import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        // Follow with a slight delay for the outer ring
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
      if (cursorDotRef.current) {
        // Directly follow for the inner dot
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    const handleMouseEnter = () => {
      setIsActive(true);
    };
    
    const handleMouseLeave = () => {
      setIsActive(false);
    };
    
    // Add interactivity to links and buttons
    const hoverTargets = document.querySelectorAll('a, button, input, .hover-effect');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'none';
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isActive ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div 
        ref={cursorDotRef} 
        className={`custom-cursor-dot ${isActive ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
};

export default CustomCursor;