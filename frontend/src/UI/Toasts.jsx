import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Toasts = () => {
  const notify = () => {
    // Success Toast
    toast.success('Success! Everything went smoothly.', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#4ade80', 
        color: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
      },
    });

    // Error Toast
    toast.error('Error! Something went wrong.', {
      duration: 5000,
      position: 'bottom-left',
      style: {
        background: '#f87171', 
        color: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
      },
    });

    toast('This is a custom styled toast!', {
      duration: 3000,
      position: 'top-center',
      className: 'bg-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-md',
    });
  };

  return (
    <div className="p-6">
      <button 
        onClick={notify} 
        className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all"
      >
        Show some Toast
      </button>
      <Toaster />
    </div>
  );
}

export default Toasts;
