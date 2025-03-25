import React, { useState } from 'react';
import { Bookmark, Lock, Eye, Download, Star, X, ExternalLink, CreditCard, Check } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Modern Dashboard',
    image: 'https://cdn.dribbble.com/userupload/5619862/file/original-29965bbf020b7f401671f29b8b4ab45f.jpg?resize=752x',
    previewImages: [
      'https://cdn.dribbble.com/userupload/5619862/file/original-29965bbf020b7f401671f29b8b4ab45f.jpg?resize=752x',
      'https://assets.materialup.com/uploads/9d7bd106-7b86-4551-b9af-30ab5b098295/preview.png',
      'https://assets.materialup.com/uploads/a3c0702a-fa1e-4234-a4eb-5658a129affb/preview.jpg'
    ],
    description: 'A sleek, responsive admin dashboard with dark mode support',
    longDescription: 'This premium dashboard template comes with over 25 component pages, 10+ chart types, and fully responsive design. Perfect for admin interfaces, data visualization, and SaaS applications.',
    category: 'Admin',
    isPremium: true,
    price: '$49',
    stars: 4.8,
    downloads: 1243,
    features: ['Responsive Layout', 'Dark/Light Modes', '25+ Components', 'Data Visualization', 'Authentication Pages']
  },
  {
    id: 2,
    name: 'E-commerce Starter',
    image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-website-templates.jpg',
    previewImages: [
      'https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-website-templates.jpg',
      'https://designmodo.com/wp-content/uploads/2018/08/e-commerce-website-templates.jpg',
      'https://cdn.dribbble.com/users/2446071/screenshots/12162796/media/1656133022fe8a67f8e4e247a2cd3ea2.png'
    ],
    description: 'Complete e-commerce solution with shopping cart and payment integration',
    longDescription: 'This free e-commerce template includes product listings, shopping cart, checkout process, and user account pages. Built with responsive design and optimized for mobile devices.',
    category: 'E-commerce',
    isPremium: false,
    stars: 4.5,
    downloads: 2891,
    features: ['Product Listings', 'Shopping Cart', 'Checkout Process', 'User Accounts', 'Responsive Design']
  },
  {
    id: 3,
    name: 'Portfolio Pro',
    image: 'https://themewagon.com/wp-content/uploads/2022/08/developer-portfolio-template-free.jpg',
    previewImages: [
      'https://themewagon.com/wp-content/uploads/2022/08/developer-portfolio-template-free.jpg',
      'https://cdn.dribbble.com/users/3305260/screenshots/14348451/media/a7b012c4dc34b48bb01789bd6e36cd0a.jpg',
      'https://cdn.dribbble.com/users/2346069/screenshots/16505352/media/58a17403d0152e592cb7340df135c183.png'
    ],
    description: 'Showcase your work with this elegant developer portfolio template',
    longDescription: 'Portfolio Pro is a premium template designed specifically for developers, designers, and creatives. It features smooth animations, project showcases, skills display, and contact forms.',
    category: 'Portfolio',
    isPremium: true,
    price: '$29',
    stars: 4.9,
    downloads: 867,
    features: ['Project Showcases', 'Skills Display', 'Testimonials Section', 'Contact Form', 'Blog Integration']
  },
  {
    id: 4,
    name: 'Blog Master',
    image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-blog-theme.jpg',
    previewImages: [
      'https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-blog-theme.jpg',
      'https://cdn.dribbble.com/users/1223030/screenshots/16452033/media/9e7a19792c05a1e21eeaae1c4213135d.png',
      'https://cdn.dribbble.com/users/1654619/screenshots/14513455/media/567848f1b10ad6e41bfe01beead3ca69.png'
    ],
    description: 'Modern blog template with category filtering and comment system',
    longDescription: 'Blog Master is a free template designed for content creators. It includes category filtering, comment system, newsletter signup, and social sharing features.',
    category: 'Blog',
    isPremium: false,
    stars: 4.3,
    downloads: 3452,
    features: ['Category Filtering', 'Comment System', 'Newsletter Signup', 'Social Sharing', 'Related Posts']
  },
];

const PremiumTemplates = () => {
  const [filter, setFilter] = useState('all');
  const [bookmarkedTemplates, setBookmarkedTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentPreviewImage, setCurrentPreviewImage] = useState(0);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [downloadingTemplate, setDownloadingTemplate] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const filteredTemplates = filter === 'all' 
    ? templates 
    : filter === 'free' 
      ? templates.filter(t => !t.isPremium) 
      : templates.filter(t => t.isPremium);
  
  const toggleBookmark = (templateId) => {
    if (bookmarkedTemplates.includes(templateId)) {
      setBookmarkedTemplates(bookmarkedTemplates.filter(id => id !== templateId));
      showNotificationMessage('Template removed from bookmarks');
    } else {
      setBookmarkedTemplates([...bookmarkedTemplates, templateId]);
      showNotificationMessage('Template added to bookmarks');
    }
  };
  
  const openPreview = (template) => {
    setSelectedTemplate(template);
    setCurrentPreviewImage(0);
    setPreviewOpen(true);
  };
  
  const closePreview = () => {
    setPreviewOpen(false);
    setTimeout(() => {
      setSelectedTemplate(null);
    }, 300);
  };
  
  const handleDownload = (template) => {
    if (template.isPremium) {
      setSelectedTemplate(template);
      setPaymentModalOpen(true);
    } else {
      setDownloadingTemplate(template.id);
      setTimeout(() => {
        setDownloadingTemplate(null);
        showNotificationMessage(`${template.name} has been downloaded successfully!`);
      }, 2000);
    }
  };
  
  const processPayment = () => {
    setProcessingPayment(true);
    
    // Simulating payment process
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentSuccess(true);
      
      // Close payment modal after success
      setTimeout(() => {
        setPaymentModalOpen(false);
        setPaymentSuccess(false);
        showNotificationMessage(`Thank you for purchasing ${selectedTemplate.name}!`);
      }, 2000);
    }, 3000);
  };
  
  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  
  const handleNextImage = () => {
    if (selectedTemplate) {
      setCurrentPreviewImage((prev) => 
        (prev + 1) % selectedTemplate.previewImages.length
      );
    }
  };
  
  const handlePrevImage = () => {
    if (selectedTemplate) {
      setCurrentPreviewImage((prev) => 
        prev === 0 ? selectedTemplate.previewImages.length - 1 : prev - 1
      );
    }
  };
  
  const viewAllTemplates = () => {
    showNotificationMessage('Viewing all available templates');
  };
      
  return (
    <div className="premium-templates py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Website Templates</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our collection of professionally designed website templates. 
            Some are free to use, others require a premium license.
          </p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Templates
            </button>
            <button 
              onClick={() => setFilter('free')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'free' 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Free
            </button>
            <button 
              onClick={() => setFilter('premium')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'premium' 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Premium
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTemplates.map(template => (
            <div 
              key={template.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openPreview(template)}
                    className="bg-white text-gray-900 p-3 rounded-full mr-3 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                    aria-label="Preview template"
                  >
                    <Eye size={20} />
                  </button>
                  <button 
                    onClick={() => toggleBookmark(template.id)}
                    className={`${
                      bookmarkedTemplates.includes(template.id) 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                    } p-3 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75`}
                    aria-label={bookmarkedTemplates.includes(template.id) ? "Remove bookmark" : "Add bookmark"}
                  >
                    <Bookmark size={20} className={bookmarkedTemplates.includes(template.id) ? "fill-current" : ""} />
                  </button>
                </div>
                
                {template.isPremium && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Lock size={12} className="mr-1" />
                    Premium
                  </div>
                )}
                
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {template.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg dark:text-white">{template.name}</h3>
                  {template.isPremium ? (
                    <span className="text-violet-600 font-bold">{template.price}</span>
                  ) : (
                    <span className="text-green-500 font-bold">Free</span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {template.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="text-yellow-500 w-4 h-4 fill-current" />
                    <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">
                      {template.stars} ({template.downloads})
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => handleDownload(template)}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                      template.isPremium 
                        ? 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-200 hover:bg-violet-200 dark:hover:bg-violet-800' 
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800'
                    } transition-colors`}
                  >
                    {downloadingTemplate === template.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download size={16} className="mr-1" />
                        {template.isPremium ? 'Purchase' : 'Download'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={viewAllTemplates}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all">
            Browse All Templates
          </button>
        </div>
      </div>
      
      {/* Template Preview Modal */}
      {selectedTemplate && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${previewOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={closePreview}></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col z-10 transform transition-transform duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTemplate.name}</h3>
              <button 
                onClick={closePreview}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Image Preview */}
            <div className="relative h-96 overflow-hidden bg-black">
              <img 
                src={selectedTemplate.previewImages[currentPreviewImage]} 
                alt={`${selectedTemplate.name} preview`} 
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-2 rounded-full text-gray-900 dark:text-white hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-2 rounded-full text-gray-900 dark:text-white hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedTemplate.previewImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentPreviewImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPreviewImage 
                        ? 'bg-white' 
                        : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Template Details */}
            <div className="p-6 overflow-y-auto">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedTemplate.longDescription}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Features</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 grid md:grid-cols-2 gap-x-4">
                    {selectedTemplate.features.map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:w-1/3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Category</span>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedTemplate.category}</p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Rating</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 w-4 h-4 fill-current mr-1" />
                      <p className="font-medium text-gray-900 dark:text-white">{selectedTemplate.stars}/5</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Downloads</span>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedTemplate.downloads.toLocaleString()}</p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">License</span>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {selectedTemplate.isPremium ? 'Premium License' : 'Free License'}
                    </p>
                  </div>
                  
                  {selectedTemplate.isPremium && (
                    <div className="mb-6">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Price</span>
                      <p className="font-bold text-xl text-violet-600">{selectedTemplate.price}</p>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => handleDownload(selectedTemplate)}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium ${
                      selectedTemplate.isPremium 
                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    } transition-colors`}
                  >
                    <Download size={16} className="mr-2" />
                    {selectedTemplate.isPremium ? 'Purchase Now' : 'Download Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Modal */}
      {selectedTemplate && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${paymentModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={() => !processingPayment && setPaymentModalOpen(false)}></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col z-10">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Purchase</h3>
              {!processingPayment && (
                <button 
                  onClick={() => setPaymentModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              )}
            </div>
            
            {paymentSuccess ? (
              <div className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  Thank you for your purchase. Your download will start automatically.
                </p>
              </div>
            ) : (
              <>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{selectedTemplate.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTemplate.category} Template</p>
                    </div>
                    <p className="font-bold text-xl text-violet-600">{selectedTemplate.price}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Payment Details</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1" htmlFor="card-name">
                          Name on Card
                        </label>
                        <input 
                          type="text" 
                          id="card-name" 
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                          placeholder="John Doe"
                          disabled={processingPayment}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1" htmlFor="card-number">
                          Card Number
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="card-number" 
                            className="w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                            placeholder="4242 4242 4242 4242"
                            disabled={processingPayment}
                          />
                          <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={16} />
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1" htmlFor="expiry">
                            Expiry Date
                          </label>
                          <input 
                            type="text" 
                            id="expiry" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                            placeholder="MM/YY"
                            disabled={processingPayment}
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1" htmlFor="cvc">
                            CVC
                          </label>
                          <input 
                            type="text" 
                            id="cvc" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                            placeholder="123"
                            disabled={processingPayment}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={processPayment}
                    disabled={processingPayment}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium bg-violet-600 text-white hover:bg-violet-700 transition-colors disabled:bg-violet-400 disabled:cursor-not-allowed"
                  >
                    {processingPayment ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Pay Now'
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Toast Notification */}
      <div className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center ${
        showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="mr-2 bg-green-500 rounded-full p-1">
          <Check size={16} />
        </div>
        {notificationMessage}
      </div>
    </div>
  );
};

export default PremiumTemplates;