import React, { useState } from "react";
import { motion } from "framer-motion";

function TemplateToggles() {
    // State for each toggle type
    const [basicToggle, setBasicToggle] = useState(false);
    const [iosToggle, setIosToggle] = useState(false);
    const [materialToggle, setMaterialToggle] = useState(false);
    const [coloredToggle, setColoredToggle] = useState(false);
    const [labeledToggle, setLabeledToggle] = useState(false);
    const [sizeToggle, setSizeToggle] = useState(false);
    
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Toggle Switch Showcase</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Basic Toggle</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toggle state: {basicToggle ? "On" : "Off"}</span>
                        <button 
                            onClick={() => setBasicToggle(!basicToggle)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${basicToggle ? 'bg-blue-600' : 'bg-gray-300'}`}
                        >
                            <span 
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${basicToggle ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                    </div>
                </div>

                {/* iOS Style Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">iOS Style Toggle</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toggle state: {iosToggle ? "On" : "Off"}</span>
                        <button 
                            onClick={() => setIosToggle(!iosToggle)}
                            className={`relative inline-flex h-7 w-14 items-center rounded-full p-1 transition-colors focus:outline-none ${iosToggle ? 'bg-green-400' : 'bg-gray-200'}`}
                        >
                            <motion.span 
                                animate={{ x: iosToggle ? 7 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="inline-block h-5 w-5 rounded-full bg-white shadow-md"
                            />
                        </button>
                    </div>
                </div>

                {/* Material Design Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Material Design Toggle</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toggle state: {materialToggle ? "On" : "Off"}</span>
                        <button 
                            onClick={() => setMaterialToggle(!materialToggle)}
                            className="relative inline-flex items-center focus:outline-none"
                        >
                            <div className={`w-10 h-4 rounded-full transition-colors ${materialToggle ? 'bg-purple-300' : 'bg-gray-300'}`}></div>
                            <motion.div 
                                animate={{ 
                                    x: materialToggle ? 10 : 0,
                                    backgroundColor: materialToggle ? "#9333ea" : "#d1d5db" 
                                }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="absolute w-6 h-6 rounded-full shadow-md"
                            />
                        </button>
                    </div>
                </div>

                {/* Multi-Colored Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Multi-Colored Toggle</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toggle state: {coloredToggle ? "On" : "Off"}</span>
                        <button 
                            onClick={() => setColoredToggle(!coloredToggle)}
                            className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors focus:outline-none ${coloredToggle ? 'bg-gradient-to-r from-pink-500 to-orange-500' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`}
                        >
                            <motion.span 
                                animate={{ x: coloredToggle ? 8 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className={`inline-block h-6 w-6 rounded-full shadow-md ${coloredToggle ? 'bg-white' : 'bg-white'}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Labeled Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Labeled Toggle</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Toggle state: {labeledToggle ? "On" : "Off"}</span>
                        <button 
                            onClick={() => setLabeledToggle(!labeledToggle)}
                            className={`relative inline-flex h-8 w-20 items-center rounded-full transition-colors focus:outline-none ${labeledToggle ? 'bg-blue-600' : 'bg-gray-300'}`}
                        >
                            <span className={`absolute text-xs font-medium ${labeledToggle ? 'left-2 text-white' : 'right-2 text-gray-700'}`}>
                                {labeledToggle ? 'ON' : 'OFF'}
                            </span>
                            <motion.span 
                                animate={{ x: labeledToggle ? 12 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="inline-block h-6 w-6 rounded-full bg-white shadow-md"
                            />
                        </button>
                    </div>
                </div>

                {/* Size-Variable Toggle */}
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Size-Variable Toggle</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Small</span>
                            <button 
                                onClick={() => setSizeToggle(!sizeToggle)}
                                className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none ${sizeToggle ? 'bg-blue-600' : 'bg-gray-300'}`}
                            >
                                <span 
                                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${sizeToggle ? 'translate-x-4' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Medium</span>
                            <button 
                                onClick={() => setSizeToggle(!sizeToggle)}
                                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${sizeToggle ? 'bg-blue-600' : 'bg-gray-300'}`}
                            >
                                <span 
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${sizeToggle ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Large</span>
                            <button 
                                onClick={() => setSizeToggle(!sizeToggle)}
                                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${sizeToggle ? 'bg-blue-600' : 'bg-gray-300'}`}
                            >
                                <span 
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${sizeToggle ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code example section */}
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Implementation Example</h3>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// Basic Toggle Example
const [isEnabled, setIsEnabled] = useState(false);

<button 
  onClick={() => setIsEnabled(!isEnabled)}
  className={\`relative inline-flex h-6 w-11 items-center rounded-full 
  transition-colors \${isEnabled ? 'bg-blue-600' : 'bg-gray-300'}\`}
>
  <span 
    className={\`inline-block h-4 w-4 transform rounded-full bg-white 
    transition-transform \${isEnabled ? 'translate-x-6' : 'translate-x-1'}\`}
  />
</button>`}
                </pre>
            </div>
        </div>
    );
}

export default TemplateToggles;