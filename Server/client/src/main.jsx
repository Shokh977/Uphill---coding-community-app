import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(

  <div className="bg-light dark:bg-dark text-dark dark:text-white min-h-screen" >
          <App />
  </div>,
)
