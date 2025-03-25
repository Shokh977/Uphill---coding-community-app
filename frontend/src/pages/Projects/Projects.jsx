import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { projectsData } from "./ProjectsData";
import { GithubIcon, LinkIcon, ExternalLink, Code, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);
  
  // Get unique tech categories
  const categories = ["All", ...new Set(projectsData.flatMap(project => project.technologies))];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(filter));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm font-medium mb-6"
          >
            <Code size={16} />
            <span>Portfolio Showcase</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My Creative <span className="text-violet-600">Projects</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Browse through my latest work and discover the projects I've built using various technologies.
          </motion.p>
          
          {/* Filter tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {categories.slice(0, 8).map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } shadow-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects section */}
        <motion.div 
          className="space-y-32" 
          ref={containerRef}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="relative"
            >
              {/* Background decorative elements */}
              {index % 2 === 0 && (
                <div className="absolute -left-20 top-20 w-40 h-40 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
              )}
              {index % 2 !== 0 && (
                <div className="absolute -right-20 top-20 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
              )}
              
              <div className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16`}>
                
                {/* Project info section */}
                <motion.div 
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    <span className="text-violet-600">{project.name}</span>
                  </h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Timeline:</span> {project.startDate} - {project.endDate}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-black dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubIcon size={18} />
                      GitHub
                    </motion.a>
                    
                    {project.http && (
                      <motion.a
                        href={project.http}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
                
                {/* Project images */}
                <motion.div 
                  className="w-full lg:w-1/2 relative min-h-[350px]"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-6 relative">
                    {project.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className={`relative ${
                          imgIndex === 0 ? "col-span-2" : "col-span-1"
                        } shadow-lg rounded-xl overflow-hidden`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          transition: { duration: 0.3 }
                        }}
                        initial={{ 
                          rotate: (imgIndex % 2 === 0 ? 3 : -3),
                          y: (imgIndex % 3 === 0 ? 20 : -10),
                        }}
                        whileInView={{ 
                          rotate: 0,
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 15,
                            delay: 0.1 * imgIndex 
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={image}
                          alt={`${project.name} preview ${imgIndex + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        
                        {/* Reflective effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="text-center mt-24 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="https://github.com/Shokh977" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More on GitHub
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
