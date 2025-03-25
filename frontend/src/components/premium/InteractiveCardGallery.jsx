import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ title, description, image, icon: Icon, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative h-72 rounded-xl p-6 flex flex-col justify-between overflow-hidden cursor-none"
      style={{
        background: `linear-gradient(45deg, ${color.from} 0%, ${color.to} 100%)`,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        scale: 1.05,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Moving Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 8%), 
                           radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 8%),
                           radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 8%),
                           radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.2) 0%, transparent 8%)`,
          backgroundSize: '60px 60px',
          transform: isHovered ? 'translateX(5px) translateY(-5px)' : 'none',
          transition: 'transform 0.5s ease-out',
        }}
      />
      
      {/* Card Content */}
      <div className="z-10 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <motion.div
            className="p-2 rounded-full bg-white/20"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-white w-5 h-5" />
          </motion.div>
        </div>
        
        <div className="mt-auto">
          <p className="text-white/80 text-sm mb-4">{description}</p>
          
          <motion.button
            className="px-4 py-1.5 bg-white/20 text-white text-sm rounded-lg backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </div>
      </div>
      
      {/* 3D Effect Light */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        style={{
          background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.25) 0%, transparent 50%)',
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const InteractiveCardGallery = () => {
  const cards = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating modern and responsive websites using the latest technologies',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: { from: '#4F46E5', to: '#7C3AED' }, // indigo to purple
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces with attention to detail',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: { from: '#EC4899', to: '#F43F5E' }, // pink to rose
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications for iOS and Android',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: { from: '#10B981', to: '#059669' }, // emerald to green
    },
    {
      id: 4,
      title: 'Backend Systems',
      description: 'Developing robust and scalable server-side applications',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: { from: '#F59E0B', to: '#D97706' }, // amber to yellow
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Interactive Showcase</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my services with these interactive cards showcasing my expertise and skills.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card3D
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCardGallery;