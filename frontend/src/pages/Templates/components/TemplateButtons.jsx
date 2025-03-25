import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  ShoppingCart, 
  Heart, 
  Trash, 
  Share2, 
  Check, 
  X,
  Loader2,
  Mail,
  Plus,
  Send
} from 'lucide-react';

const TemplateButtons = ({ handleCopy, copiedStates, preview = false }) => {
  const buttonData = [
    {
      id: 'primary-button',
      title: 'Primary Button',
      description: 'Standard primary action button',
      code: `<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
  Button Text
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
          Button Text
        </button>
      )
    },
    {
      id: 'secondary-button',
      title: 'Secondary Button',
      description: 'Outlined button for secondary actions',
      code: `<button className="px-4 py-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg transition-colors">
  Button Text
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg transition-colors">
          Button Text
        </button>
      )
    },
    {
      id: 'icon-button',
      title: 'Icon Button',
      description: 'Button with icon and text',
      code: `<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <ArrowRight size={16} />
  Button with Icon
</button>`,
      price: '$10',
      component: (
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <ArrowRight size={16} />
          Button with Icon
        </button>
      )
    },
    {
      id: 'animated-button',
      title: 'Animated Button',
      description: 'Button with hover animation',
      code: `<motion.button 
  className="px-4 py-2 bg-violet-600 text-white rounded-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Animated Button
</motion.button>`,
      price: '$12',
      component: (
        <motion.button 
          className="px-4 py-2 bg-violet-600 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Animated Button
        </motion.button>
      )
    },
    {
      id: 'gradient-button',
      title: 'Gradient Button',
      description: 'Button with gradient background',
      code: `<button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-lg transition-all">
  Gradient Button
</button>`,
      price: '$10',
      component: (
        <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-lg transition-all">
          Gradient Button
        </button>
      )
    },
    {
      id: 'loading-button',
      title: 'Loading Button',
      description: 'Button with loading spinner',
      code: `<button 
  className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-2" 
  disabled
>
  <Loader2 size={16} className="animate-spin" />
  Loading...
</button>`,
      price: '$12',
      component: (
        <button 
          className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-2" 
          disabled
        >
          <Loader2 size={16} className="animate-spin" />
          Loading...
        </button>
      )
    },
    {
      id: 'pill-button',
      title: 'Pill Button',
      description: 'Button with pill shape',
      code: `<button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors">
  Pill Button
</button>`,
      price: '$8',
      component: (
        <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors">
          Pill Button
        </button>
      )
    },
    {
      id: 'ghost-button',
      title: 'Ghost Button',
      description: 'Subtle button with transparent background',
      code: `<button className="px-4 py-2 text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-900/30 rounded-lg transition-colors">
  Ghost Button
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-900/30 rounded-lg transition-colors">
          Ghost Button
        </button>
      )
    },
    {
      id: 'success-button',
      title: 'Success Button',
      description: 'Button for successful actions',
      code: `<button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <Check size={16} />
  Success
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Check size={16} />
          Success
        </button>
      )
    },
    {
      id: 'danger-button',
      title: 'Danger Button',
      description: 'Button for dangerous actions',
      code: `<button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <Trash size={16} />
  Delete
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Trash size={16} />
          Delete
        </button>
      )
    },
    {
      id: 'social-share-button',
      title: 'Social Share Button',
      description: 'Button for sharing on social media',
      code: `<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <Share2 size={16} />
  Share
</button>`,
      price: '$10',
      component: (
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Share2 size={16} />
          Share
        </button>
      )
    },
    {
      id: 'like-button',
      title: 'Like Button',
      description: 'Heart-shaped like button',
      code: `<button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
  <Heart className="w-6 h-6" />
</button>`,
      price: '$8',
      component: (
        <button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="w-6 h-6" />
        </button>
      )
    },
    {
      id: 'download-button',
      title: 'Download Button',
      description: 'Button for downloading files',
      code: `<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <Download size={16} />
  Download
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Download size={16} />
          Download
        </button>
      )
    },
    {
      id: 'glass-button',
      title: 'Glass Button',
      description: 'Button with glass morphism effect',
      code: `<button className="px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-lg hover:bg-white/30 transition-colors">
  Glass Button
</button>`,
      price: '$12',
      component: (
        <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
          <button className="px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-lg hover:bg-white/30 transition-colors">
            Glass Button
          </button>
        </div>
      )
    },
    {
      id: 'add-to-cart-button',
      title: 'Add to Cart Button',
      description: 'E-commerce add to cart button',
      code: `<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <ShoppingCart size={16} />
  Add to Cart
</button>`,
      price: '$10',
      component: (
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      )
    },
    {
      id: 'fab-button',
      title: 'Floating Action Button',
      description: 'Circular floating action button',
      code: `<button className="p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg transition-colors">
  <Plus size={24} />
</button>`,
      price: '$10',
      component: (
        <button className="p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg transition-colors">
          <Plus size={24} />
        </button>
      )
    },
    {
      id: 'submit-button',
      title: 'Form Submit Button',
      description: 'Button for form submission',
      code: `<button 
  type="submit" 
  className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
>
  <Send size={16} />
  Submit Form
</button>`,
      price: '$10',
      component: (
        <button 
          type="submit" 
          className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Send size={16} />
          Submit Form
        </button>
      )
    },
    {
      id: 'contact-button',
      title: 'Contact Button',
      description: 'Button for contact forms',
      code: `<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
  <Mail size={16} />
  Contact Us
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Mail size={16} />
          Contact Us
        </button>
      )
    },
    {
      id: 'toggle-button',
      title: 'Toggle Button',
      description: 'Button that toggles between states',
      code: `<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
</button>`,
      price: '$12',
      component: (
        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-violet-600">
          <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
        </button>
      )
    },
    {
      id: 'cancel-button',
      title: 'Cancel Button',
      description: 'Button for canceling actions',
      code: `<button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors flex items-center gap-2">
  <X size={16} />
  Cancel
</button>`,
      price: '$8',
      component: (
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors flex items-center gap-2">
          <X size={16} />
          Cancel
        </button>
      )
    }
  ];

  // Filter down to just a few items for preview mode
  const displayedButtons = preview ? buttonData.slice(0, 8) : buttonData;

  return (
    <div className="mb-12">
      {!preview && (
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Button Components</h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedButtons.map((button) => (
          <motion.div
            key={button.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{button.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{button.description}</p>
              
              <div className="flex justify-center items-center py-4 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-4 overflow-hidden" style={{ minHeight: '80px' }}>
                {button.component}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-violet-600">{button.price}</span>
                <button
                  onClick={() => handleCopy(button.id, button.code)}
                  className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {copiedStates[button.id] ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {preview && (
        <div className="text-center mt-8">
          <motion.button
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo(0, 0)}
          >
            View All Button Components
            <ArrowRight size={16} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default TemplateButtons;