import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg h-[400px] group"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Project Image */}
      <div className="w-full h-[60%] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Info */}
      <div className="p-5 h-[40%] flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Project Links Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="flex gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>
          )}
          
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Interactive3DProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce solution with cart management, payment processing, and order tracking.",
      image: "/e-commerce.jpg",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Shokh977/e-commerce-platform",
      demo: "https://e-commerce-platform-demo.vercel.app/"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Mobile app for food ordering with real-time delivery tracking and personalized recommendations.",
      image: "/food.jpg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      github: "https://github.com/Shokh977/food-delivery-app",
      demo: "https://food-delivery-demo.vercel.app/"
    },
    {
      id: 3,
      title: "Real Estate Finder",
      description: "Property search platform with advanced filtering, virtual tours, and mortgage calculator.",
      image: "/realestate.jpg",
      category: "Web App",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      github: "https://github.com/Shokh977/real-estate-finder"
    },
    {
      id: 4,
      title: "SmartWatch Health App",
      description: "Wearable app that tracks fitness metrics, sleep patterns, and provides health insights.",
      image: "/smartwatch.png",
      category: "IoT App",
      technologies: ["SwiftUI", "HealthKit", "CoreML"],
      github: "https://github.com/Shokh977/smartwatch-health-app",
      demo: "https://smartwatch-health-demo.netlify.app/"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of my recent work. Click on the project to view the code or live demo!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interactive3DProjects;