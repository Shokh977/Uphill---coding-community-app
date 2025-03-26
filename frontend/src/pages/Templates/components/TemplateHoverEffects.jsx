import React from "react";

const TemplateHoverEffects = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Hover Effect Templates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Scale Effect */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Scale Effect</h3>
          <div className="bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-purple-900 dark:to-indigo-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
            <p className="text-gray-800 dark:text-gray-200">Hover to enlarge</p>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Glow Effect</h3>
          <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-500/50">
            <p className="text-white">Hover for glow</p>
          </div>
        </div>

        {/* Color Shift */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Color Shift</h3>
          <div className="bg-blue-500 p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:bg-pink-500">
            <p className="text-white">Hover to change color</p>
          </div>
        </div>

        {/* Image Overlay */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Image Overlay</h3>
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Example" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
            </div>
          </div>
        </div>

        {/* Text Reveal */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Text Reveal</h3>
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md overflow-hidden relative h-48">
            <h4 className="text-lg font-semibold dark:text-white">Project Title</h4>
            <div className="absolute inset-0 bg-violet-600 flex items-center justify-center translate-y-full hover:translate-y-0 transition-transform duration-300 p-4">
              <p className="text-white">This is a description of the project that appears on hover.</p>
            </div>
          </div>
        </div>

        {/* Border Animation */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Border Animation</h3>
          <div className="p-6 rounded-lg shadow-md relative bg-white dark:bg-gray-800 border-2 border-transparent hover:border-transparent group cursor-pointer">
            <p className="text-gray-800 dark:text-gray-200">Hover for border effect</p>
            <span className="absolute inset-0 rounded-lg transition-all duration-300 
                  before:absolute before:w-0 before:h-[2px] before:bg-purple-500 before:top-0 before:left-0 before:transition-all before:duration-200 group-hover:before:w-full
                  after:absolute after:h-0 after:w-[2px] after:bg-purple-500 after:top-0 after:right-0 after:transition-all after:duration-200 group-hover:after:h-full"></span>
            <span className="absolute inset-0 rounded-lg transition-all duration-300 
                  before:absolute before:w-0 before:h-[2px] before:bg-purple-500 before:bottom-0 before:right-0 before:transition-all before:duration-200 group-hover:before:w-full 
                  after:absolute after:h-0 after:w-[2px] after:bg-purple-500 after:bottom-0 after:left-0 after:transition-all after:duration-200 group-hover:after:h-full"></span>
          </div>
        </div>

        {/* Zoom Image */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Zoom Image</h3>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Example" 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* 3D Tilt Effect */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">3D Tilt Effect</h3>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform-gpu hover:rotate-x-12 hover:rotate-y-12 cursor-pointer">
            <p className="text-gray-800 dark:text-gray-200">Hover for 3D tilt</p>
          </div>
        </div>

        {/* Button Hover */}
        <div className="hover-card">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Button Hover</h3>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg transition-all duration-300 
                   hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 
                   active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Hover Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateHoverEffects;