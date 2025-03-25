import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, ExternalLink } from 'lucide-react';

const TemplateSidebars = ({ handleCopy, copiedStates, preview = false }) => {
  const sidebarTemplates = [
    {
      id: 'sidebar-1',
      title: 'Collapsible Dashboard Sidebar',
      description: 'A responsive sidebar with collapsible sections, icons, and smooth animations.',
      price: '$29',
      preview: (
        <div className="w-full h-64 flex">
          <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
            <div className="text-xl font-bold text-violet-400 mb-8">DashSidebar</div>
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

const DashboardSidebar = () => {
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
              DashSidebar
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

export default DashboardSidebar;`
    },
    {
      id: 'sidebar-2',
      title: 'Multi-level Navigation Sidebar',
      description: 'A hierarchical sidebar with multi-level navigation, perfect for complex applications.',
      price: '$34',
      preview: (
        <div className="w-full h-64 flex">
          <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
            <div className="text-xl font-bold text-gray-800 dark:text-white mb-6">MultiNav</div>
            <div className="space-y-1">
              <div className="px-3 py-2 rounded-md bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 font-medium">
                Dashboard
              </div>
              <div className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                Customers
              </div>
              <div>
                <div className="px-3 py-2 flex justify-between items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <span>Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="ml-4 mt-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2 space-y-1">
                  <div className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Inventory
                  </div>
                  <div className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Categories
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                Orders
              </div>
              <div className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                Reports
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">Main content area</div>
          </div>
        </div>
      ),
      code: `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MultiLevelSidebar = () => {
  const [expandedItems, setExpandedItems] = useState({
    products: true,
    settings: false
  });
  const [activeItem, setActiveItem] = useState('dashboard');
  
  const toggleExpand = (key) => {
    setExpandedItems({
      ...expandedItems,
      [key]: !expandedItems[key]
    });
  };
  
  const sidebarMenu = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      ),
      children: []
    },
    {
      key: 'customers',
      label: 'Customers',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      children: []
    },
    {
      key: 'products',
      label: 'Products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      ),
      children: [
        {
          key: 'inventory',
          label: 'Inventory',
          children: []
        },
        {
          key: 'categories',
          label: 'Categories',
          children: []
        },
        {
          key: 'pricing',
          label: 'Pricing',
          children: [
            {
              key: 'standard',
              label: 'Standard',
            },
            {
              key: 'discounts',
              label: 'Discounts',
            }
          ]
        }
      ]
    },
    {
      key: 'orders',
      label: 'Orders',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      children: []
    },
    {
      key: 'reports',
      label: 'Reports',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
        </svg>
      ),
      children: []
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      children: [
        {
          key: 'profile',
          label: 'Profile',
          children: []
        },
        {
          key: 'account',
          label: 'Account',
          children: []
        },
        {
          key: 'notifications',
          label: 'Notifications',
          children: []
        }
      ]
    }
  ];
  
  const renderMenuItems = (items, depth = 0) => {
    return items.map((item) => (
      <div key={item.key}>
        <button
          onClick={() => {
            setActiveItem(item.key);
            if (item.children?.length > 0) {
              toggleExpand(item.key);
            }
          }}
          className={\`w-full text-left px-3 py-2 flex items-center justify-between rounded-md \${
            depth > 0 ? 'text-sm' : ''
          } \${
            activeItem === item.key
              ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 font-medium'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }\`}
        >
          <div className="flex items-center">
            {depth === 0 && <span className="mr-2">{item.icon}</span>}
            <span>{item.label}</span>
          </div>
          {item.children?.length > 0 && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={\`h-4 w-4 transition-transform \${expandedItems[item.key] ? 'transform rotate-180' : ''}\`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        
        {item.children?.length > 0 && (
          <AnimatePresence>
            {expandedItems[item.key] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={\`ml-\${depth === 0 ? 4 : 3} mt-1 \${depth === 0 ? 'border-l-2 border-gray-200 dark:border-gray-700 pl-2' : 'pl-2'} space-y-1\`}
              >
                {renderMenuItems(item.children, depth + 1)}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    ));
  };
  
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="text-xl font-bold text-gray-800 dark:text-white">MultiNav</div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {renderMenuItems(sidebarMenu)}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800 dark:text-white">John Smith</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLevelSidebar;`
    },
    {
      id: 'sidebar-3',
      title: 'Minimalist Icon Sidebar',
      description: 'A clean icon-based sidebar with tooltips and smooth transitions.',
      price: '$24',
      preview: (
        <div className="w-full h-64 flex">
          <div className="w-16 bg-gray-900 flex flex-col items-center py-6">
            <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold mb-8">M</div>
            <div className="space-y-6">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">Main content area</div>
          </div>
        </div>
      ),
      code: `import { useState } from 'react';
import { motion } from 'framer-motion';

const IconSidebar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const menuItems = [
    {
      id: 'home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home'
    },
    {
      id: 'profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: 'Profile'
    },
    {
      id: 'calendar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Calendar'
    },
    {
      id: 'messages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      label: 'Messages'
    },
    {
      id: 'analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Analytics'
    },
    {
      id: 'settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Settings'
    }
  ];
  
  return (
    <div className="flex h-screen">
      <div className="w-16 bg-gray-900 flex flex-col items-center py-6">
        {/* Logo */}
        <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold mb-8">
          M
        </div>
        
        {/* Menu Items */}
        <div className="space-y-6">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.button
                onClick={() => setActiveItem(item.id)}
                className={\`w-10 h-10 rounded-lg flex items-center justify-center \${
                  activeItem === item.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                } transition-colors\`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.button>
              
              {/* Tooltip */}
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
                >
                  {item.label}
                  {/* Triangle */}
                  <div 
                    className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 
                    border-t-transparent border-r-gray-800 border-b-transparent
                    border-t-[6px] border-r-[6px] border-b-[6px]"
                  ></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {/* Profile at bottom */}
        <div className="mt-auto relative">
          <motion.button
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredItem('profile-menu')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </motion.button>
          
          {/* Profile Tooltip */}
          {hoveredItem === 'profile-menu' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
            >
              Your Profile
              {/* Triangle */}
              <div 
                className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 
                border-t-transparent border-r-gray-800 border-b-transparent
                border-t-[6px] border-r-[6px] border-b-[6px]"
              ></div>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Dashboard</h1>
          {/* Rest of your content */}
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;`
    }
  ];

  // If preview mode, just show the first template
  const templatesForDisplay = preview ? sidebarTemplates.slice(0, 1) : sidebarTemplates;

  return (
    <div className="mb-16" id="sidebars">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold dark:text-white">Sidebar Templates</h2>
        {preview && (
          <a 
            href="#sidebars" 
            className="text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1"
            onClick={() => document.getElementById('sidebars')?.scrollIntoView({ behavior: 'smooth' })}
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

export default TemplateSidebars;