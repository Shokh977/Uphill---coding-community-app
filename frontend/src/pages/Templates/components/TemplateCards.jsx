import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, ArrowRight, Check, Heart, Share2, ExternalLink } from 'lucide-react';

const TemplateCards = ({ handleCopy, copiedStates, preview = false }) => {
  const cardsData = [
    {
      id: 'basic-card',
      title: 'Basic Card',
      description: 'Simple card with title, description and image',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <img 
    src="/portfolio.jpg" 
    alt="Card image" 
    className="w-full h-48 object-cover"
  />
  <div className="p-5">
    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Card Title</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      This is a simple card with an image, title and short description.
    </p>
    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
      View Details
    </button>
  </div>
</div>`,
      price: '$12',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <img 
            src="/portfolio.jpg" 
            alt="Card image" 
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Card Title</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a simple card with an image, title and short description.
            </p>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'hover-effect-card',
      title: 'Hover Effect Card',
      description: 'Card with smooth hover animation',
      code: `<motion.div 
  className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
  transition={{ duration: 0.3 }}
>
  <img 
    src="/portfolio.jpg" 
    alt="Card image" 
    className="w-full h-48 object-cover"
  />
  <div className="p-5">
    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Hover Card</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      This card has a smooth hover animation effect using Framer Motion.
    </p>
    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
      View Details
    </button>
  </div>
</motion.div>`,
      price: '$15',
      component: (
        <motion.div 
          className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/portfolio.jpg" 
            alt="Card image" 
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Hover Card</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card has a smooth hover animation effect using Framer Motion.
            </p>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              View Details
            </button>
          </div>
        </motion.div>
      )
    },
    {
      id: 'product-card',
      title: 'Product Card',
      description: 'E-commerce product card with pricing',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="relative">
    <img 
      src="/e-commerce.jpg" 
      alt="Product image" 
      className="w-full h-52 object-cover"
    />
    <span className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs rounded-md font-medium">
      20% OFF
    </span>
  </div>
  <div className="p-5">
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
      ))}
      <span className="text-xs text-gray-500 ml-1">(4.0)</span>
    </div>
    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Product Name</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Brief product description here</p>
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="text-gray-400 text-sm line-through">$99.99</span>
        <div className="text-xl font-bold text-violet-600">$79.99</div>
      </div>
      <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
        <Heart size={18} />
      </button>
    </div>
    <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
      <ShoppingCart size={16} />
      Add to Cart
    </button>
  </div>
</div>`,
      price: '$18',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src="/e-commerce.jpg" 
              alt="Product image" 
              className="w-full h-52 object-cover"
            />
            <span className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs rounded-md font-medium">
              20% OFF
            </span>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
              ))}
              <span className="text-xs text-gray-500 ml-1">(4.0)</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Product Name</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Brief product description here</p>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-gray-400 text-sm line-through">$99.99</span>
                <div className="text-xl font-bold text-violet-600">$79.99</div>
              </div>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                <Heart size={18} />
              </button>
            </div>
            <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'testimonial-card',
      title: 'Testimonial Card',
      description: 'Card for displaying customer testimonials',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 mb-4 overflow-hidden rounded-full">
      <img 
        src="/testemonial/woman-user.jpg" 
        alt="Person" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
      "This product exceeded all my expectations. The quality is outstanding and customer service was excellent!"
    </p>
    <h3 className="font-bold text-lg text-gray-900 dark:text-white">Sarah Johnson</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Executive</p>
  </div>
</div>`,
      price: '$14',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 overflow-hidden rounded-full">
              <img 
                src="/testemonial/woman-user.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              "This product exceeded all my expectations. The quality is outstanding and customer service was excellent!"
            </p>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Sarah Johnson</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Executive</p>
          </div>
        </div>
      )
    },
    {
      id: 'blog-preview-card',
      title: 'Blog Preview Card',
      description: 'Card for displaying blog post previews',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <img 
    src="/blog.png" 
    alt="Blog post image" 
    className="w-full h-48 object-cover"
  />
  <div className="p-5">
    <div className="flex gap-2 mb-3">
      <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full">
        Technology
      </span>
      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
        Design
      </span>
    </div>
    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
      The Future of Web Development
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
      Exploring the latest trends and technologies that are shaping the future of web development in 2025 and beyond.
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="/testemonial/man-user.jpg" 
            alt="Author" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
          <div className="text-xs text-gray-500">June 28, 2023</div>
        </div>
      </div>
      <button className="flex items-center gap-1 text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
        <span className="text-sm">Read</span>
        <ArrowRight size={14} />
      </button>
    </div>
  </div>
</div>`,
      price: '$16',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <img 
            src="/blog.png" 
            alt="Blog post image" 
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full">
                Technology
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                Design
              </span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
              The Future of Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              Exploring the latest trends and technologies that are shaping the future of web development in 2025 and beyond.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="/testemonial/man-user.jpg" 
                    alt="Author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
                  <div className="text-xs text-gray-500">June 28, 2023</div>
                </div>
              </div>
              <button className="flex items-center gap-1 text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                <span className="text-sm">Read</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-card',
      title: 'Pricing Card',
      description: 'Card for displaying pricing plans',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Pro Plan</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
      Perfect for growing businesses and professionals.
    </p>
    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul className="space-y-3 mb-8">
      {[
        "Unlimited projects",
        "Priority support",
        "Advanced analytics",
        "Custom reporting",
        "API access"
      ].map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check size={16} className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
      Get Started
    </button>
  </div>
</div>`,
      price: '$15',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Pro Plan</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Perfect for growing businesses and professionals.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited projects",
                "Priority support",
                "Advanced analytics",
                "Custom reporting",
                "API access"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'portfolio-card',
      title: 'Portfolio Project Card',
      description: 'Card for showcasing portfolio projects',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group">
  <div className="relative overflow-hidden">
    <img 
      src="/portfolio.jpg" 
      alt="Project preview" 
      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <div className="p-4 w-full">
        <div className="flex gap-2 justify-end">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
            <ExternalLink size={16} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
            <Github size={16} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="p-5">
    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">E-commerce Platform</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
        React
      </span>
      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
        Node.js
      </span>
      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
        MongoDB
      </span>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
      A full-stack e-commerce platform with advanced features including cart management, payment processing, and order tracking.
    </p>
    <button className="w-full py-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg transition-colors">
      View Project
    </button>
  </div>
</div>`,
      price: '$18',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img 
              src="/portfolio.jpg" 
              alt="Project preview" 
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <div className="flex gap-2 justify-end">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">E-commerce Platform</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                React
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                Node.js
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                MongoDB
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A full-stack e-commerce platform with advanced features including cart management, payment processing, and order tracking.
            </p>
            <button className="w-full py-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg transition-colors">
              View Project
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'feature-card',
      title: 'Feature Card',
      description: 'Card for highlighting features or services',
      code: `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-5">
    <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Feature Title</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-5">
    Detailed description of the feature or service and how it benefits users. Explain the value proposition clearly.
  </p>
  <button className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 flex items-center gap-1 font-medium">
    Learn More
    <ArrowRight size={16} />
  </button>
</div>`,
      price: '$14',
      component: (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
          <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-5">
            <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Feature Title</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5">
            Detailed description of the feature or service and how it benefits users. Explain the value proposition clearly.
          </p>
          <button className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 flex items-center gap-1 font-medium">
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>
      )
    }
  ];

  // Filter down to just a few items for preview mode
  const displayedCards = preview ? cardsData.slice(0, 4) : cardsData;

  return (
    <div className="mb-12">
      {!preview && (
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Card Components</h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {displayedCards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
              
              <div className="flex justify-center items-center py-4 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-4 overflow-hidden" style={{ minHeight: '280px' }}>
                <div className="transform scale-75">
                  {card.component}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-violet-600">{card.price}</span>
                <button
                  onClick={() => handleCopy(card.id, card.code)}
                  className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {copiedStates[card.id] ? (
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
            
            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex justify-between items-center">
              <motion.button
                className="flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                whileHover={{ x: 2 }}
              >
                View Details
                <ArrowRight size={14} />
              </motion.button>
              
              <motion.button
                className="px-3 py-1 bg-violet-600 text-white rounded-lg text-sm flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={14} />
                Buy Now
              </motion.button>
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
            View All Card Components
            <ArrowRight size={16} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default TemplateCards;