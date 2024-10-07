import React, { useState, useEffect } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b dark:border-gray-800">
      <button
        className="w-full flex justify-between items-center p-4 text-left dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-200 transition-all"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 dark:bg-gray-900">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;

export function Accordions() {
    return (
      <div className="App max-w-xl mx-auto p-6">
        <h1 className="text-2xl mb-4">React Accordion with Tailwind</h1>
        
        <Accordion
          title="What is React?"
          content="React is a JavaScript library for building user interfaces. It lets you create reusable components and handle the state of your application efficiently."
        />
  
        <Accordion
          title="What is Tailwind CSS?"
          content="Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs without writing any custom CSS."
        />
  
        <Accordion
          title="How does useState work?"
          content="The useState hook allows you to add state to functional components in React. It returns an array with two values: the current state and a function to update it."
        />
      </div>
    );
  }

  // autoclose accordion


  const AccordionAutoClose = ({ title, content, autoCloseTime = 5000 }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => setIsOpen(false), autoCloseTime);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }
    }, [isOpen, autoCloseTime]);
  
    return (
      <div className="border-b dark:border-gray-800">
        <button
          className="w-full flex justify-between items-center p-4 text-left dark:bg-gray-900 hover:dark:bg-gray-800 hover:bg-gray-200 transition-all"
          onClick={toggleAccordion}
        >
          <span className="text-lg font-semibold">{title}</span>
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
  
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="p-4 dark:bg-gray-900">{content}</div>
        </div>
      </div>
    );
  };
  
 ;
  

  export function AutoClose() {
    return (
      <div className="App max-w-xl mx-auto p-6">
        <h1 className="text-2xl mb-4">Auto Close Accordion</h1>
        
        <AccordionAutoClose
        title="What is the difference between React and Angular?"
        content="React is a library focused on UI, while Angular is a full-fledged framework for building web applications."
      />

      <AccordionAutoClose
        title="How can I improve website performance?"
        content="Optimize images, use lazy loading, minify CSS and JavaScript files, and leverage browser caching."
      />

      <AccordionAutoClose
        title="What are some popular frontend frameworks?"
        content="Some popular frontend frameworks include React, Vue, Angular, and Svelte."
      />
      </div>
    );
  }