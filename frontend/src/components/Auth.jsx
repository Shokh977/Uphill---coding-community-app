import SignIn from "../pages/Login";
import React, { useState } from "react";

const content = [
  {
    title: "Authentication",
    description: "using React, Express, MongoDB",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic quis, harum saepe rem magni neque, eos veritatis natus facilis ex. Ratione excepturi quo omnis tempora, ipsam adipisci molestiae, dicta assumenda consectetur pariatur dolores nemo earum reprehenderit error quod repellat quidem odit quibusdam doloribus deserunt.",
  },
  {
    title: "Authorization",
    description: "using JWT, OAuth",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nesciunt aspernatur soluta porro veritatis, commodi quo.",
  },
  {
    title: "Profile Management",
    description: "using GraphQL, Apollo",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae iure, sit quisquam vero optio deserunt.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevPage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  return (
    <div className=" gap-6 md:grid grid-cols-2">
      <div className="flex flex-col mb-6 h-full">
        <h1 className="text-4xl m-8">Let's have a fun</h1>
        <div className="h-[350px] flex flex-col flex-grow dark:bg-gray-900 bg-gray-100 p-4 rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              {content[currentIndex].title}
            </h2>
            <p>{content[currentIndex].description}</p>
          </div>
          <p className="flex-grow transition-transform duration-300">
            {content[currentIndex].text}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <div className="m-3 p-3">
              <button
                onClick={prevPage}
                className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition duration-300 mx-2">
                Prev
              </button>
              <button
                onClick={nextPage}
                className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition duration-300">
                Next
              </button>
            </div>
            <div className="text-center mt-4">
              <span>
                Page {currentIndex + 1} of {content.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[330px] grid-cols-1 dark:bg-gray-900 bg-gray-100 border border-none rounded-lg flex justify-center mx-auto w-[80%] py-8">
        <SignIn />
      </div>
    </div>
  );
};

export default About;
