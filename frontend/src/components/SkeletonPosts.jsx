import React from 'react';

const SkeletonPost = () => {
    console.log('skeleton is working');
    
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonPost;
