import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, ExternalLink } from 'lucide-react';

const TemplateNavbars = ({ handleCopy, copiedStates, preview = false }) => {
  const navbarTemplates = [
    {
      id: 'navbar-1',
      title: 'Modern Animated Navbar',
      description: 'A sleek navbar with smooth hover animations and mobile responsive menu.',
      price: '$19',
      preview: (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-violet-600 dark:text-violet-400">Logo</div>
            <div className="hidden md:flex items-center gap-6">
              {['Home', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <div 
                  key={item} 
                  className="relative group cursor-pointer"
                >
                  <span className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <button className="py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
                Sign Up
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ),
      code: `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-violet-600 dark:text-violet-400">Logo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#"
                className="relative group"
              >
                <span className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex">
            <button className="py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-lg">
              {['Home', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ModernNavbar;`
    },
    {
      id: 'navbar-2',
      title: 'Transparent Glass Navbar',
      description: 'A modern glass-effect navbar with blur background that becomes opaque on scroll.',
      price: '$24',
      preview: (
        <div className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-md py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">GlassNav</div>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <div 
                  key={item} 
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="py-2 px-4 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300">
                Login
              </button>
              <button className="py-2 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300">
                Sign Up
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ),
      code: `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg' 
          : 'bg-transparent'
      }\`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              GlassNav
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <button className="py-2 px-4 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300">
              Login
            </button>
            <button className="py-2 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2">
                <button className="w-full py-2 px-4 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300">
                  Login
                </button>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default GlassNavbar;`
    },
    {
      id: 'navbar-3',
      title: 'Sidebar Navigation',
      description: 'A vertical sidebar navigation with collapsible sections and animated transitions.',
      price: '$29',
      preview: (
        <div className="w-full h-64 flex">
          <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
            <div className="text-xl font-bold text-violet-400 mb-8">SideNav</div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Dashboard</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    <span>Projects</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="mt-2 pl-7 space-y-2">
                  <div className="text-gray-400 hover:text-white cursor-pointer text-sm">Active</div>
                  <div className="text-gray-400 hover:text-white cursor-pointer text-sm">Archived</div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">Main content area</div>
          </div>
        </div>
      ),
      code: `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      children: []
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      children: ['Active', 'Archived', 'Completed']
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      children: ['Reports', 'Insights', 'Goals']
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      children: []
    }
  ];
  
  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };
  
  return (
    <div className="flex h-screen">
      <motion.div
        className={\`bg-gray-800 text-white \${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 flex flex-col\`}
        animate={{ width: isCollapsed ? 80 : 256 }}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl font-bold text-violet-400"
            >
              SideNav
            </motion.div>
          )}
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md hover:bg-gray-700"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7M19 19l-7-7 7-7"} 
              />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2 px-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <button 
                  onClick={() => toggleSection(item.id)}
                  className={\`w-full flex items-center justify-between p-2 rounded-md \${
                    activeSection === item.id 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }\`}
                >
                  <div className="flex items-center">
                    <div>{item.icon}</div>
                    {!isCollapsed && (
                      <motion.span 
                        className="ml-3" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </div>
                  {!isCollapsed && item.children.length > 0 && (
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={\`h-4 w-4 transition-transform \${activeSection === item.id ? 'rotate-180' : ''}\`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                </button>
                
                {!isCollapsed && item.children.length > 0 && (
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 pl-10 space-y-1"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block py-1 px-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-gray-700"
                          >
                            {child}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
            {!isCollapsed && (
              <motion.div 
                className="ml-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs text-gray-400">View Profile</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;`
    }
  ];

  // If preview mode, just show the first template
  const templatesForDisplay = preview ? navbarTemplates.slice(0, 1) : navbarTemplates;

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold dark:text-white">Navbar Templates</h2>
        {preview && (
          <a 
            href="#navbars" 
            className="text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1"
            onClick={() => document.getElementById('navbars')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {templatesForDisplay.map((template) => (
          <motion.div 
            key={template.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{template.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{template.description}</p>
                </div>
                <div className="text-xl font-bold text-violet-600">{template.price}</div>
              </div>
              
              <div className="mb-4 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                {template.preview}
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleCopy(template.id, template.code)}
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {copiedStates[template.id] ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy Code
                    </>
                  )}
                </button>
                
                <button className="py-1 px-3 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded transition-colors">
                  Purchase
                </button>
              </div>
            </div>
            
            {!preview && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Preview</span>
                  </div>
                </div>
                <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto max-h-60">
                  {template.code.slice(0, 300)}...
                </pre>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateNavbars;