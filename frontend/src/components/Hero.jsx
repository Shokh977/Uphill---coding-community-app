import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Youtube, ArrowRight, Code, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="w-full min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden py-10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
      </div>
      
      {/* Social media sidebar */}
      <div className="fixed left-7 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-5 p-3 rounded-full dark:bg-gray-800/50 bg-white/50 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Shokh977" className="hover:scale-110 transition-transform">
            <motion.div whileHover={{ y: -3, color: "#8b5cf6" }} transition={{ type: "spring", stiffness: 500 }}>
              <Github className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400" />
            </motion.div>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/abdulazizov-shokhrukh-b7a6b2225/" className="hover:scale-110 transition-transform">
            <motion.div whileHover={{ y: -3, color: "#8b5cf6" }} transition={{ type: "spring", stiffness: 500 }}>
              <Linkedin className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400" />
            </motion.div>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/@shokh_tv" className="hover:scale-110 transition-transform">
            <motion.div whileHover={{ y: -3, color: "#8b5cf6" }} transition={{ type: "spring", stiffness: 500 }}>
              <Youtube className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          
          {/* Left column (3 cols on desktop) */}
          <motion.div 
            className="md:col-span-3 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles size={16} />
              <span>Web Developer & UI/UX Designer</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Turning <span className="text-violet-600">Ideas</span> into<br />
              Real Life <span className="text-violet-600">Projects</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I help businesses and individuals build professional websites and applications with modern technologies and clean design.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link to="/projects">
                <motion.button 
                  className="px-6 py-3 bg-violet-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-violet-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-violet-600">5+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-violet-600">50+</h3>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-violet-600">20+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column (2 cols on desktop) */}
          <motion.div 
            className="md:col-span-2 relative mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Main image with animation */}
              <motion.div 
                className="absolute inset-4 z-10 rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <img
                  src="https://camo.githubusercontent.com/aa3b7c25d2be856f50dbbece232936b85ea8b13cebc32ee2aa1a0d88f43ffd2f/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f38312f31372f38622f38313137386234376138353938663063383163343739396632636464343035372e676966"
                  alt="Developer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-400 dark:bg-violet-600 rounded-full blur-xl opacity-50"></div>
              <div className="absolute bottom-4 left-0 w-16 h-16 bg-blue-400 dark:bg-blue-600 rounded-full blur-xl opacity-50"></div>
              
              {/* Tech stack icons */}
              <motion.div 
                className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Code className="text-violet-600" size={24} />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 z-20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Layers className="text-blue-500" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
