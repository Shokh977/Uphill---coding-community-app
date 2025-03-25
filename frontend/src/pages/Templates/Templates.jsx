import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Code, Copy, Check, ChevronRight, Filter } from 'lucide-react';
import TemplateNavbars from './components/TemplateNavbars';
import TemplateSidebars from './components/TemplateSidebars';
import TemplateButtons from './components/TemplateButtons';
import TemplateCards from './components/TemplateCards';
import TemplateFooters from './components/TemplateFooters';
import TemplateHoverEffects from './components/TemplateHoverEffects';
import TemplateAnimations from './components/TemplateAnimations';
import TemplateToggles from './components/TemplateToggles';

const TemplatesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false });
    }, 2000);
  };

  const tabs = [
    { id: 'all', label: 'All Components' },
    { id: 'navbars', label: 'Navbars' },
    { id: 'sidebars', label: 'Sidebars' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'footers', label: 'Footers' },
    { id: 'hover', label: 'Hover Effects' },
    { id: 'animations', label: 'Animations' },
    { id: 'toggles', label: 'Toggles & Inputs' }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'navbars':
        return <TemplateNavbars handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'sidebars':
        return <TemplateSidebars handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'buttons':
        return <TemplateButtons handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'cards':
        return <TemplateCards handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'footers':
        return <TemplateFooters handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'hover':
        return <TemplateHoverEffects handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'animations':
        return <TemplateAnimations handleCopy={handleCopy} copiedStates={copiedStates} />;
      case 'toggles':
        return <TemplateToggles handleCopy={handleCopy} copiedStates={copiedStates} />;
      default:
        return (
          <>
            <TemplateNavbars handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateSidebars handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateButtons handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateCards handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateFooters handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateHoverEffects handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateAnimations handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
            <TemplateToggles handleCopy={handleCopy} copiedStates={copiedStates} preview={true} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Code size={16} />
            <span>Premium Components</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            UI Component <span className="text-violet-600">Templates</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Premium, ready-to-use UI components built with React, Tailwind CSS, and Framer Motion.
            Purchase individual components or bundles for your next project.
          </motion.p>
        </motion.div>

        {/* Desktop Tab Navigation */}
        <div className="hidden md:block mb-12">
          <div className="flex justify-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } shadow-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6 flex justify-center">
          <motion.button 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="flex items-center gap-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={16} />
            Filter Components
          </motion.button>
        </div>

        {/* Mobile Filter Dropdown */}
        {showMobileFilter && (
          <motion.div 
            className="md:hidden mb-8 flex flex-col gap-2 items-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowMobileFilter(false);
                }}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all w-full max-w-xs ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Component Display */}
        <div className="mb-20">
          {renderActiveComponent()}
        </div>

        {/* Purchase CTA */}
        <motion.div 
          className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to enhance your project?</h3>
              <p className="text-violet-100 mb-6 max-w-xl">
                Get access to all these premium components and more. Use them in personal or commercial projects 
                with our flexible licensing options.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-violet-300" size={20} /> High-quality, responsive components
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-violet-300" size={20} /> React, Tailwind CSS, and Framer Motion
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-violet-300" size={20} /> Dark mode support for all components
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-violet-300" size={20} /> Regular updates and new additions
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 w-full">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                <h4 className="text-gray-900 dark:text-white text-xl font-bold mb-2">Complete Bundle</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">All components with source code</p>
                <div className="text-3xl font-bold text-violet-600 mb-4">$99</div>
                <motion.button 
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart size={18} />
                  Purchase Now
                </motion.button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  One-time payment, lifetime access
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <FaqItem 
              question="What's included in the component package?" 
              answer="You'll get the complete source code for all components shown on this page, including React components, Tailwind CSS styles, and animation configurations. Each component is thoroughly documented with usage examples."
            />
            <FaqItem 
              question="Can I use these in commercial projects?" 
              answer="Yes! Our standard license allows you to use the components in both personal and commercial projects. You can use them in multiple projects, but redistribution or resale of the components themselves is not permitted."
            />
            <FaqItem 
              question="Do you offer customization services?" 
              answer="Yes, we offer customization services to adapt these components to your specific needs. Contact us for a custom quote based on your requirements."
            />
            <FaqItem 
              question="How do I get support if I have issues?" 
              answer="All purchases include 6 months of support via email. We typically respond within 24-48 hours to help troubleshoot any issues you encounter with the components."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button 
        className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        <ChevronRight 
          className={`transform transition-transform ${isOpen ? 'rotate-90' : ''} text-gray-500`} 
          size={18} 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default TemplatesPage;