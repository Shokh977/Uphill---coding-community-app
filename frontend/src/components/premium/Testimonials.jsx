import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'InnovateX',
    image: '/testemonial/woman-user.jpg',
    text: 'Working with this developer was an absolute pleasure. They delivered our e-commerce website ahead of schedule and the attention to detail was exceptional. Our conversion rates have increased by 35% since launch!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Startup Founder',
    company: 'TechFlow',
    image: '/testemonial/man-user.jpg',
    text: 'I needed a portfolio that would stand out from the crowd. The custom animations and clean design perfectly showcase my work, and I\'ve received numerous compliments from potential clients.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Elevation Media',
    image: '/testemonial/woman-user.jpg',
    text: 'The dashboard template saved us months of development time. The code is clean, well-documented, and easily customizable. Exactly what we needed to get our analytics platform off the ground.',
    rating: 4
  },
  {
    id: 4,
    name: 'Daniel Thompson',
    role: 'Creative Director',
    company: 'Visionary Design',
    image: '/testemonial/portfolio.jpg',
    text: 'As a design agency, we have high standards. The templates we purchased exceeded our expectations in both functionality and aesthetics. Worth every penny!',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto rotation
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  const handlePrev = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((current) => 
      (current + 1) % testimonials.length
    );
  };
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="testimonial-section py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-violet-100 dark:bg-violet-900 rounded-2xl mb-4">
              <Quote size={24} className="text-violet-600 dark:text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people who have used our templates and services have to say.
            </p>
          </div>
          
          <div 
            className="relative overflow-hidden" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="testimonial-slider">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-violet-200 dark:border-violet-700">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white py-1 px-3 rounded-full text-sm font-semibold shadow-lg">
                            {testimonial.company}
                          </div>
                        </div>
                        
                        <div className="text-center mt-8">
                          <h3 className="font-bold text-xl dark:text-white">{testimonial.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          <div className="flex justify-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={`${
                                  i < testimonial.rating 
                                    ? 'text-yellow-500 fill-current' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-4 text-gray-200 dark:text-gray-700 w-16 h-16" />
                          <p className="text-gray-700 dark:text-gray-300 text-lg italic relative z-10">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-violet-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;